const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { requireProjectConfig } = require('../../utils/requireConfigs');
const projectConfig = requireProjectConfig();

module.exports = {
    devServer: {
        contentBase: [
            path.resolve(process.cwd(), 'build')
        ],
        port: projectConfig.devServerPort,
        compress: true,
        hot: true
    },
    plugins: [
        new HotModuleReplacementPlugin()
    ]
};