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
