/*
 *     Web Config
 *     Copyright (C) 2020 Craig Miller
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
    webpackSass,
    webpackResources
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
