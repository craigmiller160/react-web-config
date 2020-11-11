const webpack = require('webpack');
const webpackConfig = require('../../webpack');
const tsSetup = require('../../typescript/tssetup');

const execute = () => {
    tsSetup(false);

    const webpackCompiler = webpack(webpackConfig);

    console.log('Running webpack build');

    webpackCompiler.run((err, stats) => {
        if (err) {
            console.error(err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
            return;
        }

        const output = stats.toString({
            colors: true
        });

        console.log(output);
    });
};

module.exports = execute;