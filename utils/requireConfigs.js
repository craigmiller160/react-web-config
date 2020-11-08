const path = require('path');
const fs = require('fs');

const externalEslintConfigPath = path.resolve(process.cwd(), 'eslint.config.js');
const externalBabelConfigPath = path.resolve(process.cwd(), 'babel.config.js');
const externalProjectConfigPath = path.resolve(process.cwd(), 'project.config.js');

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

const requireProjectConfig = () => {
    const internalConfig = require('../webpack/files/projectConfig');
    if (fs.existsSync(externalProjectConfigPath)) {
        const externalConfig = require(externalProjectConfigPath);
        return {
            ...internalConfig,
            ...externalConfig
        };
    }
    return internalConfig;
};

module.exports = {
    requireEslintConfig,
    requireBabelConfig,
    requireProjectConfig
};
