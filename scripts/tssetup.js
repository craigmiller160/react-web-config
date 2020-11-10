const { createNewTsConfig, createExtendsTsConfig } = require('../typescript/tsCreator');

console.log('Creating base tsconfig.json')
createNewTsConfig();

console.log('Creating local tsconfig.json');
createExtendsTsConfig();