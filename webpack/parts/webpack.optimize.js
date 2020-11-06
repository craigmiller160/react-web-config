const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    optimization: {
        usedExports: process.env.NODE_ENV === 'production',
        minimize: process.env.NODE_ENV === 'production',
        sideEffects: false,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
};
