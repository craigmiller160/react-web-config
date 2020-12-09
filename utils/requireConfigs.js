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

const externalEslintConfigPath = path.resolve(process.cwd(), 'eslint.config.js');
const externalBabelConfigPath = path.resolve(process.cwd(), 'babel.config.js');
const externalProjectConfigPath = path.resolve(process.cwd(), 'project.config.js');

const requireEslintConfig = () => {
    if (fs.existsSync(externalEslintConfigPath)) {
        return require(externalEslintConfigPath);
    }
    return require('../eslint');
};

const requireBabelConfig = () => {
    if (fs.existsSync(externalBabelConfigPath)) {
        return require(externalBabelConfigPath);
    }
    return require('../babel');
};

const requireProjectConfig = () => {
    const internalConfig = require(path.resolve(__dirname, '../project.config.js'));
    if (fs.existsSync(externalProjectConfigPath)) {
        const externalConfig = require(externalProjectConfigPath);
        return {
            ...internalConfig,
            ...externalConfig
        };
    }
    return internalConfig;
};

module.exports = {
    requireEslintConfig,
    requireBabelConfig,
    requireProjectConfig
};
