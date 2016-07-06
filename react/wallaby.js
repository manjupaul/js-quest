const wallabyWebpack = require('wallaby-webpack');
const webpackConfig = require('./config/webpack.test.config.js');

module.exports = function (wallaby) {

    const webpackPostprocessor = wallabyWebpack(webpackConfig);

    return {
        files: [
            // not required if using PhantomJs2 - http://wallabyjs.com/docs/integration/phantomjs2.html
            {pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false},
            {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false},

            {pattern: 'src/**/*.component.js*', load: false}
        ],
        
        testFramework: 'mocha',

        tests: [
            { pattern: 'src/**/*.spec.js*', load: false }
        ],

        compilers: {
            '**/*.js*': wallaby.compilers.babel()
        },

        postprocessor: webpackPostprocessor,

        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    };
};