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
        hot: true,
        https: projectConfig.devServerHttps,
        proxy: projectConfig.devServerProxy
    },
    plugins: [
        new HotModuleReplacementPlugin()
    ]
};