const createPresetEnv = require('./createPresetEnv');
const languageFeatures = require('./languageFeatures');

const config = {
	presets: [
		'@babel/preset-react'
	],
	plugins: [
		...languageFeatures,
		'@babel/plugin-transform-runtime'
	],
	env: {
		development: {
			presets: [
				createPresetEnv(false)
			],
			plugins: [

			]
		},
		production: {
			presets: [
				createPresetEnv(false)
			],
			plugins: [

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
