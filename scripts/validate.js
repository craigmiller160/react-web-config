const spawn = require('cross-spawn');
const path = require('path');

const execute = () => {
    console.log('Running ESLint');

    const lintResult = spawn.sync('node', [
        path.resolve(__dirname, 'lint.js')
    ], { stdio: 'inherit' });

    if (lintResult.status !== 0) {
        process.exit(lintResult.status);
        return;
    }

    console.log('Running Unit Tests');

    const testResult = spawn.sync('node', [
        path.resolve(__dirname, 'test.js')
    ], { stdio: 'inherit' });

    process.exit(testResult.status);
};

execute();
