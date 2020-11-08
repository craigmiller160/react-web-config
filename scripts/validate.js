const spawn = require('cross-spawn');
const path = require('path');

const execute = () => {
    const lintResult = spawn.sync('node', [
        path.resolve(__dirname, 'lint.js')
    ], { stdio: 'inherit' });

    if (lintResult.status !== 0) {
        process.exit(lintResult.status);
        return;
    }

    const testResult = spawn.sync('node', [
        path.resolve(__dirname, 'test.js')
    ], { stdio: 'inherit' });

    process.exit(testResult.status);
};

execute();
