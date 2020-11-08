const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { requireProjectConfig } = require('../../utils/requireConfigs');
const projectConfig = requireProjectConfig();

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: projectConfig.title,
            filename: 'index.html',
            template: path.resolve(__dirname, '../files/index.template.html'),
            minify: true
        })
    ]
};
