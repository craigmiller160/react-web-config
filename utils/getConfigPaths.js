const path = require('path');
const fs = require('fs');

const externalJestConfigPath = path.resolve(process.cwd(), 'jest.config.js');

const getJestConfigPath = () => {
    if (fs.existsSync(externalJestConfigPath)) {
        return externalJestConfigPath;
    }
    return path.resolve(__dirname, '../jest/index.js');
};

module.exports = {
    getJestConfigPath
};
