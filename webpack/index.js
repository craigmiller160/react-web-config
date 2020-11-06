const webpackBase = require('./parts/webpack.base');
const webpackHtml = require('./parts/webpack.html');
const webpackJs = require('./parts/webpack.javascript');
const webpackAnalyze = require('./parts/webpack.analyze');
const webpackOptimize = require('./parts/webpack.optimize');
const webpackResources = require('./parts/webpack.resources');
const webpackCss = require('./parts/webpack.css');
const webpackCssExtract = require('./parts/webpack.cssExtract');
const merge = require('webpack-merge');

const parts = [
    webpackBase,
    webpackHtml,
    webpackJs,
    webpackOptimize,
    webpackCss
];

if (process.env.ANALYZE) {
    parts.push(webpackAnalyze);
}

if(process.env.NODE_ENV === 'production') {
    parts.push(webpackCssExtract);
}



module.exports = merge(parts);
