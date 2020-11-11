const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');

module.exports = {
    plugins: [
        postcssImport,
        postcssFlexbugsFixes,
        postcssPresetEnv({ stage: 3 })
    ]
};
