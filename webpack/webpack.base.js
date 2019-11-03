const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const createConfig = ({ rootDir, projectConfig } = {}) => ({
	mode: process.env.WEBPACK_ENV,
	entry: path.resolve(rootDir, 'src'),
	resolve: {
		modules: [
			path.resolve(rootDir, 'src'),
			path.resolve(rootDir, 'node_modules')
		]
	},
	output: {
		path: path.resolve(rootDir, 'dist'),
		filename: 'assets/js/app.[hash:8].js',
		chunkFilename: 'assets/js/[name].[hash:8].js'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: projectConfig.title,
			noScriptMessage: 'This project requires JavaScript',
			inject: false,
			filename: 'index.html',
			template: projectConfig.paths.indexTemplate, // TODO convention over config here
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		})
	]
});

module.exports = createConfig;