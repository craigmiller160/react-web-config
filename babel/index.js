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

const createPresetEnv = require('./utils/createPresetEnv');
const transformImports = require('./utils/transformImports');
const languageExtensions = require('./utils/languageExtensions');

const config = {
    presets: [
        '@babel/preset-react'
    ],
    plugins: [
        ...languageExtensions,
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 3
            }
        ],
        [
            'babel-plugin-transform-imports',
            transformImports
        ]
    ],
    env: {
        development: {
            presets: [
                createPresetEnv(false)
            ]
        },
        production: {
            presets: [
                createPresetEnv(false)
            ]
        },
        test: {
            presets: [
                createPresetEnv('commonjs')
            ],
            plugins: [
                '@babel/plugin-transform-modules-commonjs'
            ]
        }
    }
};

module.exports = config;
