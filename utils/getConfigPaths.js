const path = require('path');
const fs = require('fs');

const externalJestConfigPath = path.resolve(process.cwd(), 'jest.config.js');

const getJestConfigPath = () => {
    if (fs.existsSync(externalJestConfigPath)) {
        return require(externalJestConfigPath);
    }
    return require('../jest');
};

module.exports = {
    getJestConfigPath
};
