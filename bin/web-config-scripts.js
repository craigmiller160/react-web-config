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
