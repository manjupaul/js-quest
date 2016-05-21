const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, '../src/react'),
    build: path.join(__dirname, '../build'),
};

const common = {
    entry: {
        app: PATHS.app,
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        path: PATHS.build,
        filename: 'react-bundle.js',
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            {
                test: /\.jsx?$/,
                // Enable caching for improved performance during development
                // It uses default OS directory by default. If you need something
                // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
                loaders: ['babel?cacheDirectory'],
                // Parse only app files! Without this it will go through entire project.
                // In addition to being slow, that will most likely result in an error.
                //include: R_PATHS.app
            },
        ],
    },
    plugins: [
        new FlowStatusWebpackPlugin()
    ],
};

const server = {
    devServer: {
        contentBase: PATHS.build,

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
        port: process.env.PORT,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

if (TARGET === 'build:react' || !TARGET) {
    module.exports = merge(common, {});
}

if (TARGET === 'serve:react' || !TARGET) {
    module.exports = merge(common, server);
}
