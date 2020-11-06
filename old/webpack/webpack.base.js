const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// TODO create some pre-made complete webpack configs to share, and move all these parts to a "parts" directory

const createConfig = ({ rootDir, projectConfig, useFilenameHash = true } = {}) => {
	const hash = useFilenameHash ? '[hash:8].' : '';
	return {
		mode: process.env.WEBPACK_ENV,
		entry: path.resolve(rootDir, 'src'),
		resolve: {
			modules: [
				path.resolve(rootDir, 'src'),
				path.resolve(rootDir, 'node_modules')
			]
		},
		output: {
			path: path.resolve(rootDir, 'build'),
			filename: `assets/js/app.${hash}js`,
			chunkFilename: `assets/js/[name].${hash}js`,
			publicPath: '/'
		},
		plugins: [
			new CleanWebpackPlugin()
		]
	};
};

module.exports = createConfig;
