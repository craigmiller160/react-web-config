const spawn = require('cross-spawn');
const { getJestConfigPath } = require('../utils/getConfigPaths');

const execute = () => {
    const result = spawn.sync('jest', [
        '-c',
        getJestConfigPath()
    ], { stdio: 'inherit' });
    process.exit(result.status);
};

execute();
