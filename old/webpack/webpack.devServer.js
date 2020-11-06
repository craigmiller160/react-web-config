const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

const createConfig = ({ rootDir, port } = {}) => ({
	optimization: {
		namedModules: true
	},
	devServer: {
		compress: true,
		// inline: true,
		contentBase: [
			path.resolve(rootDir, 'build'),
			path.resolve(rootDir, 'devserver')
		],
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
			index: '/',
			rewrites: [
				{
					from: /.*assets(.*)/,
					to: (context) => '/assets' + context.match[1]
				}
			],
			verbose: true
		},
		// hot: true,
		port,
		watchContentBase: true
	},
	plugins: [
		new HotModuleReplacementPlugin()
	]
});

module.exports = createConfig;