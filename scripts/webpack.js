process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackConfig = require('../webpack');

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
