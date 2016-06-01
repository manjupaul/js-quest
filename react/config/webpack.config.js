const webpack = require('webpack');
const fs = require('fs');
const merge = require('webpack-merge');

const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const INCLUDE_PATHS = [
    fs.realpathSync(__dirname + '/../src'),
    fs.realpathSync(__dirname + '/../../shared/styles')
];

const PATHS = {
    app: './src/index.jsx',
    build: './build'
};

const common = {
    entry: {
        app: PATHS.app
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        path: PATHS.build,
        filename: 'react-bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'], include: INCLUDE_PATHS },
            { test: /\.jsx?$/, loaders: ['babel'], include: INCLUDE_PATHS }
        ]
    },
    plugins: [
        new FlowStatusWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons-bundle.js'
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
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
};

if (TARGET === 'build' || !TARGET) {
    module.exports = merge(common, {});
}

if (TARGET === 'server' || !TARGET) {
    module.exports = merge(common, server);
}
