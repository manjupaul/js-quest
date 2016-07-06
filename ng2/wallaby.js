module.exports = function (wallaby) {

    const compilerOptions = require('./src/tsconfig.json').compilerOptions;
    compilerOptions.noEmitOnError = false;

    return {
        files: [
            {pattern: 'node_modules/es6-shim/es6-shim.js', instrument: false},
            {pattern: 'node_modules/systemjs/dist/system-polyfills.js', instrument: false},
            {pattern: 'node_modules/reflect-metadata/Reflect.js', instrument: false},
            {pattern: 'node_modules/systemjs/dist/system.js', instrument: false},
            {pattern: 'node_modules/rxjs/bundles/Rx.js', instrument: false},
            {pattern: 'node_modules/zone.js/dist/zone.js', instrument: false},
            {pattern: 'node_modules/zone.js/dist/async-test.js', instrument: false},
            {pattern: 'src/system-config.ts', instrument: false},

            {pattern: 'src/app/**/*.ts', load: false},
            {pattern: 'src/app/**/*.html', load: false},
            {pattern: 'src/app/**/*.css', load: false},
            {pattern: 'src/app/**/*.spec.ts', ignore: true}
        ],

        tests: [{pattern: 'src/app/**/*.spec.ts', load: false}],

        preprocessors: {
            // see https://github.com/wallabyjs/public/issues/632#issuecomment-224205605
            'src/system-config.ts': file => file.content
                .replace(/vendor/g, 'node_modules')
                .replace(/app\//g, 'src\/app\/')
        },

        compilers: {
            '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
        },

        middleware: function (app, express) {
            app.use('/node_modules', express.static(require('path').join(__dirname, 'node_modules')));
        },

        bootstrap: function (wallaby) {
            wallaby.delayStart();

            System.config({
                defaultJSExtensions: true
            });

            var promises = [];

            Promise.all([System.import('@angular/core/testing'), System.import('@angular/platform-browser-dynamic/testing')])
                .then(function (results) {
                    var testing = results[0];
                    var browser = results[1];
                    testing.setBaseTestProviders(
                        browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
                        browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
                    );

                    for (var i = 0, len = wallaby.tests.length; i < len; i++) {
                        promises.push(System['import'](wallaby.tests[i].replace(/\.js$/, '')));
                    }
                })
                .then(function () {
                    return Promise.all(promises);
                })
                .then(function () {
                    wallaby.start();
                })
                .catch(function (e) {
                    setTimeout(function () {
                        throw e;
                    }, 0);
                });
        },
        env: {
            kind: 'electron'
        },
        debug: true
    };
};