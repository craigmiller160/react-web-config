const path = require('path');
const fs = require('fs');

const externalJestConfigPath = path.resolve(process.cwd(), 'jest.config.js');
const externalTsConfigPath = path.resolve(process.cwd(), 'tsconfig.json');

const getJestConfigPath = () => {
    if (fs.existsSync(externalJestConfigPath)) {
        return externalJestConfigPath;
    }
    return path.resolve(__dirname, '../jest/index.js');
};

const getTsConfigPath = () => externalTsConfigPath;

module.exports = {
    getJestConfigPath,
    getTsConfigPath
};
