const createPresetEnv = require('./utils/createPresetEnv');

const corejs = '3.7.0';

const config = {
    presets: [
        '@babel/preset-react'
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                corejs
            }
        ]
    ],
    env: {
        development: {
            presets: [
                createPresetEnv(false, corejs)
            ]
        },
        production: {
            presets: [
                createPresetEnv(false, corejs)
            ]
        },
        test: {
            presets: [
                createPresetEnv('commonjs', corejs)
            ],
            plugins: [
                'transform-es2015-modules-commonjs'
            ]
        }
    }
};

module.exports = config;
