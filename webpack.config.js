const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const copy = require('copy-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        "js/tables.bundle.js": './built/tables.js',
        "js/setup.bundle.js": './built/setup.js'
    },
    output: {
        path: dist,
        filename: '[name]'
    },
    plugins: [
        new uglify(),
        new copy([
            { from: './images/*.png', to: dist },
            { from: './css/*.css', to: dist },
            { from: './html/*.html', to: dist, flatten: true },
            { from: './node_modules/jquery/dist/jquery.min.js', to: path.join(dist, 'cdn'), flatten: true },
            { from: './node_modules/showdown/dist/showdown.min.js', to: path.join(dist, 'cdn'), flatten: true },
        ])
    ]
};

if (false) {
    const path = require('path');
    const webpack = require('webpack');
    const copy = require('copy-webpack-plugin');

    const ROOT = path.resolve(__dirname);
    const DESTINATION = path.resolve(__dirname, 'docs');

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
                    exclude: [/node_modules/],
                    use: 'awesome-typescript-loader'
                }
            ]
        },
        plugins: [
            new copy([
                { from: './index.html', to: DESTINATION },
                { from: './playground.html', to: DESTINATION },
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
}