const path = require('path');
const { getTsConfigPath } = require('../../utils/getConfigPaths');

module.exports = {
    resolve: {
        extensions: [
            '.ts', '.tsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(process.cwd(), 'src'),
                exclude: path.resolve(process.cwd(), 'node_modules'),
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: getTsConfigPath()
                    }
                }
            }
        ]
    }
};
