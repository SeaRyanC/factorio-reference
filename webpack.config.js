const path = require('path');
const webpack = require('webpack');
const copy = require('copy-webpack-plugin');

const ROOT = path.resolve( __dirname);
const DESTINATION = path.resolve( __dirname, 'docs');

const dev = {
    name: "dev",
    context: ROOT,
    entry: {
        'main': './src/main.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new copy([
            { from: './index.html', to: DESTINATION },
            { from: './css/**/*', to: DESTINATION },
            { from: './images/**/*', to: DESTINATION },
        ])
    ],
    devtool: 'cheap-module-source-map',
    devServer: {}
};

const vanilla = Object.assign(dev, {
    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    }
});


module.exports = dev;