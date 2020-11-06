const path = require('path');
const babelConfig = require(path.resolve(process.cwd(), 'babel.config.js'));

module.exports = {
    resolve: {
        extensions: [
            '.js', '.jsx', '.json'
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(process.cwd(), 'src'),
                exclude: path.resolve(process.cwd(), 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: babelConfig
                }
            }
        ]
    }
};
