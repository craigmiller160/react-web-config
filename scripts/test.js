const spawn = require('cross-spawn');
const { getJestConfigPath } = require('../utils/getConfigPaths');

const execute = () => {
    const result = spawn.sync('cross-env', [
        'NODE_ENV=test',
        'jest',
        '--config',
        getJestConfigPath()
    ], { stdio: 'inherit' });
    process.exit(result.status);
};

execute();
