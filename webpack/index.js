const webpackBase = require('./parts/webpack.base');
const webpackHtml = require('./parts/webpack.html');
const webpackJs = require('./parts/webpack.javascript');
const merge = require('webpack-merge');

const parts = [
    webpackBase,
    webpackHtml,
    webpackJs
];

module.exports = merge(parts);
