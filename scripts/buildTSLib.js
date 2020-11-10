const spawn = require('cross-spawn');
const { getTsConfigPath } = require('../utils/getConfigPaths');
const path = require('path');
const fs = require('fs');
const copyLibResources = require('./utils/copyLibResources');
const tsSetup = require('../typescript/tssetup');

const execute = () => {
    tsSetup(true);

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
