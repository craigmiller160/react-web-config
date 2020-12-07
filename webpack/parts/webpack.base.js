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

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { requireProjectConfig } = require('../../utils/requireConfigs');
const projectConfig = requireProjectConfig();

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
        filename: 'assets/js/[name].[contenthash].js',
        chunkFilename: 'assets/js/[name].[contenthash].js',
        publicPath: projectConfig.publicPath
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};
