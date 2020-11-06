const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const loaders = (isCssModule) => ([
    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
            importLoaders: 2
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            config: {
                path: path.resolve(__dirname, 'postcss.config.js')
            }
        }
    },
    'resolve-url-loader'
]);

module.exports = {
    plugins: [
        new MiniCssExtractPlugin()
    ],
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
