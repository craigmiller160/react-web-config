const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    plugins: [
        postcssFlexbugsFixes,
        postcssPresetEnv({ stage: 3 })
    ]
};