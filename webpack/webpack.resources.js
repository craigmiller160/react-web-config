const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const createConfig = ({ rootDir }) => ({
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|bmp|svg)$/,
                include: /images[\\\/].*\.(png|jpe?g|gif|bmp|svg)$/,
                exclude: /fonts/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 30000,
                            name: '[name].[hash:8].[ext]',
                            outputPath: 'assets/images',
                            publicPath: '../../assets/images'
                        }
                    }
                ]
            },
            {
                test: /\.ico/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            },
            {
                test: /\.(eot|otf|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                include: /fonts[\\\/].*\.(eot|otf|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                exclude: /images/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:8].[ext]',
                        outputPath: 'assets/fonts/',
                        publicPath: '../../assets/fonts'
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            context: path.resolve(rootDir, 'public'),
            from: '**/*'
        })
    ]
});

module.exports = createConfig;