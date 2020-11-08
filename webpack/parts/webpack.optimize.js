const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    optimization: {
        usedExports: process.env.NODE_ENV === 'production',
        minimize: process.env.NODE_ENV === 'production',
        sideEffects: false,
        splitChunks: {
            chunks: 'all'
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
