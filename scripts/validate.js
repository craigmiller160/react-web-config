const spawn = require('cross-spawn');

const execute = () => {
    const lintResult = spawn.sync('node', [
        './lint.js'
    ], { stdio: 'inherit' });

    if (lintResult.status !== 0) {
        process.exit(lintResult.status);
        return;
    }

    const testResult = spawn.sync('node', [
        './test.js'
    ], { stdio: 'inherit' });

    process.exit(testResult.status);
};

execute();
