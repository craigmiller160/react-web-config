const createPresetEnv = require('./utils/createPresetEnv');
const languageFeatures = require('./utils/languageFeatures');

// TODO separate out the react stuff into a separate file that can be merged

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
