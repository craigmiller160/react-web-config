#!/usr/bin/env node

const { ESLint } = require('eslint');
const path = require('path');
const fs = require('fs');

const externalEslintConfigPath = path.resolve(process.cwd(), 'eslint.config.js');

let eslintConfig;
if (fs.existsSync(externalEslintConfigPath)) {
    eslintConfig = require(externalEslintConfigPath);
} else {
    eslintConfig = require('../eslint');
}

const execute = async () => {
    const eslint = new ESLint({
        errorOnUnmatchedPattern: false,
        baseConfig: eslintConfig,
        useEslintrc: false
    });

    const results = await eslint.lintFiles([
        path.resolve(process.cwd(), 'src'),
        path.resolve(process.cwd(), 'test'),
        path.resolve(process.cwd(), 'cypress')
    ]);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);

    console.log(resultText);
};

execute()
    .catch((error) => {
        process.exitCode = 1;
        console.error(error);
    });
