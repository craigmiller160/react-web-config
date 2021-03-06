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

const spawn = require('cross-spawn');
const path = require('path');
const tsSetup = require('../typescript/tssetup');

console.log('Starting Webpack Dev Server');

tsSetup(false);

const webpackConfigPath = path.resolve(__dirname, '../webpack');

const result = spawn.sync(
    'cross-env',
    [
        'NODE_ENV=development',
        'webpack-dev-server',
        '--config',
        webpackConfigPath
    ],
    { stdio: 'inherit' }
);

process.exit(result.status);