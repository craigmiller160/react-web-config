const { ESLint } = require('eslint');
const path = require('path');
const { requireEslintConfig } = require('../utils/requireConfigs');
const tsSetup = require('../typescript/tssetup');

const execute = async () => {
    tsSetup(false);

    const eslint = new ESLint({
        errorOnUnmatchedPattern: false,
        baseConfig: requireEslintConfig(),
        useEslintrc: false,
        fix: true,
        fixTypes: [
            'problem',
            'suggestion',
            'layout'
        ]
    });

    const results = await eslint.lintFiles([
        path.resolve(process.cwd(), 'src'),
        path.resolve(process.cwd(), 'test'),
        path.resolve(process.cwd(), 'cypress')
    ]);
    await ESLint.outputFixes(results);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);

    console.log(resultText);
};

execute()
    .catch((error) => {
        process.exitCode = 1;
        console.error(error);
    });
