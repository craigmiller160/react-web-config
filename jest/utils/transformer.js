const babelJest = require('babel-jest');
const path = require('path');

const cwd = process.cwd();
const babelConfig = require(path.resolve(cwd, 'babel.config'));

module.exports = babelJest.createTransformer(babelConfig);
