const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    performance: {
        maxEntrypointSize: 3000000,
        maxAssetSize: 3000000
    },
    optimization: {
        usedExports: process.env.NODE_ENV === 'production',
        minimize: process.env.NODE_ENV === 'production',
        sideEffects: false,
        splitChunks: {
            chunks: 'all',
            maxSize: 1000000
        },
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: {
                                removeAll: true
                            }
                        }
                    ]
                }
            }),
            new TerserPlugin()
        ]
    }
};
