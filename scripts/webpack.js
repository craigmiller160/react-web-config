const webpack = require('webpack');
const webpackConfig = require('../webpack');

const webpackCompiler = webpack(webpackConfig);

console.log('Running webpack build');
process.env.NODE_ENV = 'production';

webpackCompiler.run((err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }

    // const info = stats.toJson();
    //
    // if (stats.hasErrors()) {
    //     console.errors(info.errors);
    // }

    const output = stats.toString({
        colors: true
    });

    console.log(output);
});
