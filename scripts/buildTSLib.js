const spawn = require('cross-spawn');
const { getTsConfigPath } = require('../utils/getConfigPaths');
const path = require('path');
const fs = require('fs');
const copyLibResources = require('./utils/copyLibResources');

// TODO try dynamically building the tsconfig.json before executing

const execute = () => {
    fs.rmdirSync(path.resolve(process.cwd(), 'lib'), { recursive: true });

    const result = spawn.sync('cross-env', [
        'NODE_ENV=production',
        'tsc',
        '--project',
        getTsConfigPath()
    ], { stdio: 'inherit' });

    if (result.status !== 0) {
        process.exit(result.status);
        return;
    }

    copyLibResources();

    process.exit(0);
};

execute();
