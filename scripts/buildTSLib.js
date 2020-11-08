const spawn = require('cross-spawn');
const { getTsConfigPath } = require('../utils/getConfigPaths');

const execute = () => {
    const result = spawn.sync('tsc', [
        '--project',
        getTsConfigPath()
    ]);
    process.exit(result);
};

execute();
