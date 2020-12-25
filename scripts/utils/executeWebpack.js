/*
 *     Web Config
 *     Copyright (C) 2020 Craig Miller
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
            process.exit(1);
            return;
        }

        const output = stats.toString({
            colors: true
        });

        console.log(output);

        if (stats.compilation.errors?.length > 0) {
            process.exit(1);
        }
    });
};

module.exports = execute;