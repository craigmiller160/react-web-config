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
        filename: 'assets/js/[name].[hash:8].js',
        chunkFilename: 'assets/js/[name].[hash:8].js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};
