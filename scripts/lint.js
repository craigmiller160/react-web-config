const { ESLint } = require('eslint');
const prettier = require('prettier');
const format = require('prettier-eslint')
const path = require('path');
const fs = require('fs');

const externalEslintConfigPath = path.resolve(process.cwd(), 'eslint.config.js');
const externalPrettierConfigPath = path.resolve(process.cwd(), 'prettier.config.js');

let eslintConfig;
if (fs.existsSync(externalEslintConfigPath)) {
    eslintConfig = require(externalEslintConfigPath);
} else {
    eslintConfig = require('../eslint');
}

let prettierOptions;
if (fs.existsSync(externalPrettierConfigPath)) {
    prettierOptions = require(externalPrettierConfigPath);
} else {
    prettierOptions = require('../prettier');
}

const execute = async () => {
    // TODO add more
    // prettier.format(path.resolve(process.cwd(), 'src'), prettierConfig);
    //
    // const eslint = new ESLint({
    //     errorOnUnmatchedPattern: false,
    //     baseConfig: eslintConfig,
    //     useEslintrc: false
    // });
    //
    // const results = await eslint.lintFiles([
    //     path.resolve(process.cwd(), 'src'),
    //     path.resolve(process.cwd(), 'test'),
    //     path.resolve(process.cwd(), 'cypress')
    // ]);
    // const formatter = await eslint.loadFormatter('stylish');
    // const resultText = formatter.format(results);
    //
    // console.log(resultText);

    // TODO need more file paths

    const options = {
        filePath: path.resolve(process.cwd(), 'src/**/*.{js,jsx,ts,tsx}'),
        eslintConfig,
        prettierOptions
    };

    const formatted = format(options);

    console.log(formatted); // TODO what to do with this?
};

execute()
    .catch((error) => {
        process.exitCode = 1;
        console.error(error);
    });
