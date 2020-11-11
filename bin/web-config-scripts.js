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

#!/usr/bin/env node

const path = require('path');
const spawn = require('cross-spawn');

const commands = [
    {
        name: 'lint',
        description: 'Run eslint',
        file: path.resolve(__dirname, '../scripts/lint.js')
    },
    {
        name: 'test',
        description: 'Run jest tests',
        file: path.resolve(__dirname, '../scripts/test.js')
    },
    {
        name: 'buildTSLib',
        description: 'Build TypeScript library',
        file: path.resolve(__dirname, '../scripts/buildTSLib.js')
    },
    {
        name: 'validate',
        description: 'Run all validation tasks. ESLint & Unit Tests',
        file: path.resolve(__dirname, '../scripts/validate.js')
    },
    {
        name: 'webpack',
        description: 'Run a webpack build',
        file: path.resolve(__dirname, '../scripts/webpack.js')
    },
    {
        name: 'webpackAnalyze',
        description: 'Run a webpack build with bundle analyzing',
        file: path.resolve(__dirname, '../scripts/webpackAnalyze')
    },
    {
        name: 'tsInit',
        description: 'Initialize TypeScript before running other commands. Generally for IDE support',
        file: path.resolve(__dirname, '../scripts/tsInit.js')
    },
    {
        name: 'devServer',
        description: 'Run the webpack dev server',
        file: path.resolve(__dirname, '../scripts/devServer.js')
    }
];

const help = () => {
    console.log('web-config-scripts');
    commands
        .map((command) => `  ${command.name} = ${command.description}`)
        .forEach((text) => console.log(text));
};

const execute = () => {
    const selected = process.argv[2];
    const command = commands.find((command) => command.name === selected);
    if (!command) {
        throw new Error(`Invalid selection: ${selected}`);
    }

    const result = spawn.sync('node', [command.file], { stdio: 'inherit' });
    process.exit(result.status);
};

if (process.argv.length < 3) {
    help();
} else {
    execute();
}
