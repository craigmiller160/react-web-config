const path = require('path');
const fs = require('fs');

let babelConfig;
const customBabelConfigPath = path.resolve(process.cwd(), 'babel.config.js');
if (fs.existsSync(customBabelConfigPath)) {
    babelConfig = require(customBabelConfigPath);
} else {
    babelConfig = require(path.resolve(__dirname, '../../babel'));
}

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
