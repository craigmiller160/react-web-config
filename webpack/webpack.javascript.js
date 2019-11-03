const path = require('path');

const createConfig = ({ rootDir }) => {
	const babelConfigPath = path.resolve(rootDir, 'babel.config.js');
	const babelConfig = require(babelConfigPath);
	return {
		resolve: {
			extensions: ['.js', '.json', '.jsx']
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					include: path.resolve(rootDir, 'src'),
					exclude: path.resolve(rootDir, 'node_modules'),
					use: {
						loader: 'babel-loader',
						options: babelConfig
					}
				}
			]
		}
	};
};

module.exports = createConfig;