const { createNewTsConfig, createExtendsTsConfig, addOutDirToTsConfig } = require('./tsCreator');

const setup = (addOutDir) => {
    createNewTsConfig();
    createExtendsTsConfig();
    if (addOutDir) {
        addOutDirToTsConfig();
    }
};

module.exports = setup;