const createPresetEnv = require('./utils/createPresetEnv');

// TODO separate out the react stuff into a separate file that can be merged

const config = {
    presets: [
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ],
    env: {
        development: {
            presets: [
                createPresetEnv(false)
            ]
        },
        production: {
            presets: [
                createPresetEnv(false)
            ]
        },
        test: {
            presets: [
                createPresetEnv('commonjs')
            ],
            plugins: [
                'transform-es2015-modules-commonjs'
            ]
        }
    }
};

module.exports = config;
