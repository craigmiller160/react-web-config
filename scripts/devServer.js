const spawn = require('cross-spawn');
const path = require('path');
const tsSetup = require('../typescript/tssetup');

tsSetup(false);

const webpackConfigPath = path.resolve(__dirname, '../webpack');

const result = spawn.sync(
    'cross-env',
    [
        'NODE_ENV=development',
        'webpack-dev-server',
        '--config',
        webpackConfigPath
    ],
    { stdio: 'inherit' }
);

process.exit(result.status);