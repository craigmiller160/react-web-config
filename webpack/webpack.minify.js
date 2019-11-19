const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { ENV_PROD } = require('./webpack.constants');
const path = require('path');
const cssNano = require('cssnano');

const createConfig = ({ rootDir } = {}) => ({
	optimization: {
		usedExports: true,
		minimize: true,
		sideEffects: false,
		minimizer: [
			new OptimizeCssAssetsPlugin({
				assetNameRegExp: /[^/]+\.(!map|css+)(?:[?#]|$)/,
				cssProcessor: cssNano,
				cssProcessorOptions: {
					discardComments: {
						removeAll: true
					},
					minimize: true,
					zindex: false
				},
				canPrint: true
			}),
			new TerserPlugin({
				parallel: true,
				test: /\.js?(\?.*)?$/i,
				sourceMap: process.env.WEBPACK_ENV === ENV_PROD
			})
		]
	}
});

module.exports = createConfig;
