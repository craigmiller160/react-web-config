const path = require('path');
const fs = require('fs');

const externalEslintConfigPath = path.resolve(process.cwd(), 'eslint.config.js');
const externalBabelConfigPath = path.resolve(process.cwd(), 'babel.config.js');

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

module.exports = {
    requireEslintConfig,
    requireBabelConfig
};
