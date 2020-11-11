const webpackBase = require('./parts/webpack.base');
const webpackHtml = require('./parts/webpack.html');
const webpackJs = require('./parts/webpack.javascript');
const webpackAnalyze = require('./parts/webpack.analyze');
const webpackOptimize = require('./parts/webpack.optimize');
const webpackResources = require('./parts/webpack.resources');
const webpackCss = require('./parts/webpack.css');
const webpackSass = require('./parts/webpack.sass');
const webpackCssExtract = require('./parts/webpack.cssExtract');
const webpackTs = require('./parts/webpack.typescript');
const webpackDevServer = require('./parts/webpack.devServer');
const { merge } = require('webpack-merge');

const parts = [
    webpackBase,
    webpackHtml,
    webpackJs,
    webpackTs,
    webpackCss,
    webpackSass
];

if (process.env.ANALYZE === 'true') {
    parts.push(webpackAnalyze);
}

if(process.env.NODE_ENV === 'production') {
    parts.push(webpackCssExtract);
    parts.push(webpackOptimize);
}

if (process.env.NODE_ENV === 'development') {
    parts.push(webpackDevServer);
}

module.exports = merge(parts);
