const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const createConfig = ({ rootDir, openAnalyzer = false }) => ({
    plugins: [
        new BundleAnalyzerPlugin({
            defaultSizes: 'parsed',
            analyzerMode: 'static',
            reportFilename: path.join(rotdir, 'reports/webpack/bundleStats.html'),
            generateStatsFile: true,
            statsOptions: { source: false },
            statsFilename: path.join(rootDir, 'reports/webpack/stats.json'),
            openAnalyzer
        })
    ]
});

module.exports = createConfig;