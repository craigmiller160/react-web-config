const path = require('path');
const fs = require('fs');

const externalEslintConfigPath = path.resolve(process.cwd(), 'eslint.config.js');
const externalBabelConfigPath = path.resolve(process.cwd(), 'babel.config.js');
const externalJestConfigPath = path.resolve(process.cwd(), 'jest.config.js');

const requireEslintConfig = () => {
    if (fs.existsSync(externalEslintConfigPath)) {
        return require(externalEslintConfigPath);
    }
    return require('../eslint');
};

const requireBabelConfig = () => {
    if (fs.existsSync(externalBabelConfigPath)) {
        return require(externalBabelConfigPath);
    }
    return require('../babel');
};

const requireJestConfig = () => {
    if (fs.existsSync(externalJestConfigPath)) {
        return require(externalJestConfigPath);
    }
    return require('../jest');
};

module.exports = {
    requireEslintConfig,
    requireBabelConfig,
    requireJestConfig
};
