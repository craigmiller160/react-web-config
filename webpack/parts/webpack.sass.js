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

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postCssConfig = require('../files/postcss.config');

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: postCssConfig
    }
};

const loaders = (isCssModule) => ([
    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
            importLoaders: process.env.NODE_ENV === 'production' ? 3 : 2,
            modules: isCssModule
        }
    },
    process.env.NODE_ENV === 'production' ? postCssLoader : null,
    'resolve-url-loader',
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true
        }
    }
].filter((loader) => loader));

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: loaders(false),
                sideEffects: true
            },
            {
                test: /\.module\.scss$/,
                use: loaders(true)
            }
        ]
    }
};
