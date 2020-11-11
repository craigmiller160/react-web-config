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
            importLoaders: process.env.NODE_ENV === 'production' ? 2 : 1,
            modules: isCssModule
        }
    },
    process.env.NODE_ENV === 'production' ? postCssLoader : null,
    'resolve-url-loader'
].filter((loader) => loader));

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
