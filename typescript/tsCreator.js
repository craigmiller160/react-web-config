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

const tsConfigVersion = 1;

const internalTsConfigPath = path.resolve(process.cwd(), 'tsconfig.base.json');
const externalTsConfigPath = path.resolve(process.cwd(), 'tsconfig.json');

const shouldWriteConfig = () => {
    if (fs.existsSync(internalTsConfigPath)) {
        return require(internalTsConfigPath).version < tsConfigVersion;
    }
    return true;
};

const createNewTsConfig = () => {
    if (shouldWriteConfig()) {
        const tsConfig = {
            version: tsConfigVersion,
            compilerOptions: {
                target: 'es5',
                lib: [
                    'dom',
                    'dom.iterable',
                    'esnext'
                ],
                allowJs: true,
                skipLibCheck: true,
                esModuleInterop: true,
                allowSyntheticDefaultImports: true,
                strict: true,
                forceConsistentCasingInFileNames: true,
                moduleResolution: 'node',
                resolveJsonModule: true,
                isolatedModules: true,
                jsx: 'react',
                declaration: false,
                module: 'es2015'
            },
            include: [
                path.resolve(process.cwd(), 'src/**/*')
            ],
            exclude: [
                path.resolve(process.cwd(), 'node_modules'),
                path.resolve(process.cwd(), 'lib'),
                path.resolve(process.cwd(), 'build'),
                path.resolve(process.cwd(), '.yalc')
            ]
        };
        const tsConfigString = JSON.stringify(tsConfig, null, 2);
        fs.writeFileSync(internalTsConfigPath, tsConfigString, 'utf8');
    }
};

const addOutDirToTsConfig = () => {
    const tsConfig = require(internalTsConfigPath);
    if (tsConfig.version <= tsConfigVersion && !tsConfig.compilerOptions.outDir) {
        tsConfig.compilerOptions.outDir = path.resolve(process.cwd(), 'lib');
        tsConfig.compilerOptions.declaration = true;
        const tsConfigString = JSON.stringify(tsConfig, null, 2);
        fs.writeFileSync(internalTsConfigPath, tsConfigString, 'utf8');
    }
};

const createExtendsTsConfig = () => {
    if (!fs.existsSync(externalTsConfigPath)) {
        const tsConfig = {
            extends: './node_modules/tsconfig.json'
        };
        const tsConfigString = JSON.stringify(tsConfig, null, 2);
        fs.writeFileSync(externalTsConfigPath, tsConfigString, 'utf8');
    }
};

module.exports = {
    createNewTsConfig,
    addOutDirToTsConfig,
    createExtendsTsConfig
};
