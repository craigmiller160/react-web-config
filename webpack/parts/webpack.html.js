const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const projectConfig = require(`${process.cwd()}/project.config`);

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: projectConfig.title || 'Webpack Application', // TODO figure out a projectConfig alternative
            filename: 'index.html',
            template: path.resolve(__dirname, '../files/index.template.html'),
            minify: true
        })
    ]
};
