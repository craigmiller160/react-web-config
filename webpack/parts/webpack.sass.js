const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postCssConfig = require('../files/postcss.config');

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: postCssConfig
    }
};

const loaders = (isCssModule) => ([
    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
            importLoaders: process.env.NODE_ENV === 'production' ? 3 : 2,
            modules: isCssModule
        }
    },
    process.env.NODE_ENV === 'production' ? postCssLoader : null,
    'resolve-url-loader',
    'sass-loader'
].filter((loader) => loader));

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
