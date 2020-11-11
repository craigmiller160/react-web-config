const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postCssConfig = require('../files/postcss.config');

const loaders = (isCssModule) => ([
    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
            importLoaders: 3,
            modules: isCssModule
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            postcssOptions: postCssConfig
        }
    },
    'resolve-url-loader',
    'sass-loader'
]);

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: loaders(false),
                sideEffects: true
            },
            {
                test: /\.module\.scss$/,
                use: loaders(true)
            }
        ]
    }
};
