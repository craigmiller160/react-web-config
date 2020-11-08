const path = require('path');
const fs = require('fs');

const externalEslintConfigPath = path.resolve(process.cwd(), 'eslint.config.js');

export const requireEslintConfig = () => {
    if (fs.existsSync(externalEslintConfigPath)) {
        return require(externalEslintConfigPath);
    }
    return require('../eslint');
};
