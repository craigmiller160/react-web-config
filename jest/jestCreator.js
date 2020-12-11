const path = require('path');
const fs = require('fs');

const configFileContents = `
const jestConfig = require('@craigmiller160/react-web-config/jest');

module.exports = {
    ...jestConfig
};
`;

const configFilePath = path.resolve(process.cwd(), 'jest.config.js');

const shouldWriteConfig = () => !fs.existsSync(configFilePath);

const createNewJestConfig = () => {
    if (shouldWriteConfig()) {
        console.log('Writing jest.config.js');
        fs.writeFileSync(configFilePath, configFileContents);
    } else {
        console.log('Skipping writing jest.config.js');
    }
};

module.exports = {
    createNewJestConfig
};