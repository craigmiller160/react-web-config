const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

module.exports = {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            defaultSizes: 'parsed',
            reportFilename: path.join(process.cwd(), 'reports', 'webpack', 'bundleStats.html'),
            generateStatsFile: true,
            statsFilename: path.join(process.cwd(), 'reports', 'webpack', 'stats.json'),
            statsOptions: {
                source: false
            },
            openAnalyzer: false
        })
    ]
};
