const webpack   = require('webpack');
const path      = require('path');
const merge     = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const R_PATHS = {
    app: path.join(__dirname, '/src/react'),
    dist: path.join(__dirname, '/dist'),
};

const common = {
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
        ],
    },
    devtool: 'eval-source-map',
};

const reactCommon = {
    entry: {
        app: R_PATHS.app
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: R_PATHS.dist,
        filename: "react-bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                // Enable caching for improved performance during development
                // It uses default OS directory by default. If you need something
                // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
                loaders: ['babel?cacheDirectory'],
                // Parse only app files! Without this it will go through entire project.
                // In addition to being slow, that will most likely result in an error.
                //include: R_PATHS.app
            }
        ]
    }
};

const server = {
    devServer: {
        contentBase: __dirname,

        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // Parse host and port from env so this is easy to customize.
        //
        // If you use Vagrant or Cloud9, set
        // host: process.env.HOST || '0.0.0.0';
        //
        // 0.0.0.0 is available to all network devices unlike default
        // localhost
        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

if (TARGET === "build:react" || !TARGET) {
    module.exports = merge(common, reactCommon);
}

if (TARGET === "serve:react" || !TARGET) {
    module.exports = merge(common, reactCommon, server);
}
