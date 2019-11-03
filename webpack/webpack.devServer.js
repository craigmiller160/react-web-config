const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

const createConfig = ({ rootDir, port } = {}) => ({
	output: {
		filename: 'assets/js/app.js'
	},
	optimization: {
		namedModules: true
	},
	devServer: {
		compress: true,
		inline: true,
		contentBase: path.resolve(rootDir, 'dist'),
		overlay: {
			errors: true,
			warnings: true
		},
		stats: {
			assets: false,
			children: false,
			chunks: false,
			chunkOrigins: false,
			colors: true,
			hash: false,
			modules: true,
			performance: true,
			publicPath: false,
			source: false,
			timings: true,
			version: false,
			warnings: true
		},
		clientLogLevel: 'info',
		historyApiFallback: {
			index: '/', // TODO left out rewrites here
			verbose: true
		},
		hot: true,
		port
	},
	plugins: [
		new HotModuleReplacementPlugin()
	]
});

module.exports = createConfig;