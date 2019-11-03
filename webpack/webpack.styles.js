const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ENV_PROD } = require('./webpack.constants');
const getLocalIdent = require('./util/getLocalIdent');

const createConfig = () => {
	const cssLoader = (useModules, importLoaders) => {
		const base = {
			loader: 'css-loader',
			options: {
				importLoaders
			}
		};
		if (useModules) {
			base.options.modules = {
				localIdentName: '[name]_[local]_[hash:base64:5]',
				getLocalIdent
			};
		}
		return base;
	};

	const postCssLoader = {
		loader: 'postcss-loader',
		options: {
			config: {
				path: path.resolve(__dirname, '../config/postcss.config.js')
			}
		}
	};

	const sassLoader = {
		loader: 'sass-loader',
		options: {
			sourceMap: true
		}
	};

	return {
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'assets/css/app.[chunkhash:8].css',
				chunkFilename: 'assets/css/[name].[chunkhash:8].css'
			})
		],
		module: {
			rules: [
				{
					test: /\.css$/,
					exclude: /\.module\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						cssLoader(false, 2),
						postCssLoader,
						'resolve-url-loader'
					],
					sideEffects: true
				},
				{
					test: /\.scss$/,
					exclude: /\.module\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						cssLoader(false, 3),
						postCssLoader,
						'resolve-url-loader',
						sassLoader
					],
					sideEffects: true
				},
				{
					test: /\.module\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						cssLoader(true, 2),
						postCssLoader,
						'resolve-url-loader'
					]
				},
				{
					test: /\.module\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						cssLoader(true, 3),
						postCssLoader,
						'resolve-url-loader',
						sassLoader
					]
				}
			]
		}
	};
};

module.exports = createConfig;