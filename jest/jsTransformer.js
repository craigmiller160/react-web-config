const babelJest = require('babel-jest');
const { requireBabelConfig } = require('../utils/requireConfigs');

module.exports = babelJest.createTransformer(requireBabelConfig());
