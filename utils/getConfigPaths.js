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

const path = require('path');
const fs = require('fs');

const externalJestConfigPath = path.resolve(process.cwd(), 'jest.config.js');
const externalTsConfigPath = path.resolve(process.cwd(), 'tsconfig.build.json');

const getJestConfigPath = () => {
    if (fs.existsSync(externalJestConfigPath)) {
        return externalJestConfigPath;
    }
    return path.resolve(__dirname, '../jest/.eslintrc.js');
};

const getTsConfigPath = () => externalTsConfigPath;

module.exports = {
    getJestConfigPath,
    getTsConfigPath
};
