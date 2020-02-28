const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ projectConfig }) => ({
    plugins: [
        new HtmlWebpackPlugin({
            title: projectConfig.title,
            noScriptMessage: 'This project requires JavaScript',
            inject: false,
            filename: 'index.html',
            template: projectConfig.paths.indexTemplate, // TODO convention over config here
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        })
    ]
});