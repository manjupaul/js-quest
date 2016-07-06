const webpack = require('webpack');
const fs = require('fs');
const merge = require('webpack-merge');

const INCLUDE_PATHS = [
    fs.realpathSync(__dirname + '/../src'),
    fs.realpathSync(__dirname + '/../../shared/styles')
];

const PATHS = {
    app: './src/index.jsx',
    build: './build'
};

const common = {
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    entry: {
        app: PATHS.app
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
    },
    devtool: 'inline-source-map',
    module: {
        preLoaders: [
            { test: /\.json$/, loader: 'json-loader'},
        ],
        loaders: [
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'], include: INCLUDE_PATHS },
            { test: /\.css$/, loaders: ['style', 'css'], include: INCLUDE_PATHS },
            { test: /\.json$/, loaders: ['json'], include: INCLUDE_PATHS },
            { test: /\.jsx$/, loaders: ['babel'], include: INCLUDE_PATHS },
            { test: /\.js$/, loaders: ['babel'], include: INCLUDE_PATHS },
        ]
    }
};

module.exports = merge(common, {});

