const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.resolve(process.cwd(), 'src'),
    resolve: {
        modules: [
            path.resolve(process.cwd(), 'src'),
            path.resolve(process.cwd(), 'node_modules')
        ]
    },
    output: {
        path: path.resolve(process.cwd(), 'build'),
        filename: 'assets/js/[name].[contenthash].js',
        chunkFilename: 'assets/js/[name].[contenthash].js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};
