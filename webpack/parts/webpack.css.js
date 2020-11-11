const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postCssConfig = require('../files/postcss.config');

const loaders = (isCssModule) => ([
    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
            importLoaders: 2,
            modules: isCssModule
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            postcssOptions: postCssConfig
        }
    },
    'resolve-url-loader'
]);

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: loaders(false),
                sideEffects: true
            },
            {
                test: /\.module\.css$/,
                use: loaders(true)
            }
        ]
    }
};
