const CopyWebpackPlugin = require('copy-webpack-plugin');

const createConfig = ({ copyPaths = [], useFilenameHash = true, publicPathPrefix = '' } = {}) => {
    const hash = useFilenameHash ? '[hash:8].' : '';

    return {
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
                                name: `[name].${hash}[ext]`,
                                outputPath: 'assets/images',
                                publicPath: `/${publicPathPrefix}/assets/images`
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
                            name: `[name].${hash}[ext]`,
                            outputPath: 'assets/fonts/',
                            publicPath: `/${publicPathPrefix}/assets/fonts`
                        }
                    }
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin(copyPaths)
        ]
    };
};

module.exports = createConfig;
