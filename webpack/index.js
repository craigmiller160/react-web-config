const webpackBase = require('./parts/webpack.base');
const webpackHtml = require('./parts/webpack.html');
const webpackJs = require('./parts/webpack.javascript');
const webpackAnalyze = require('./parts/webpack.analyze');
const webpackOptimize = require('./parts/webpack.optimize');
const webpackResources = require('./parts/webpack.resources');
const merge = require('webpack-merge');

const parts = [
    webpackBase,
    webpackHtml,
    webpackJs,
    webpackOptimize
];

if (process.env.ANALYZE) {
    parts.push(webpackAnalyze);
}



module.exports = merge(parts);
