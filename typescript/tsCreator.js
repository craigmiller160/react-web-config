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

const tsConfigVersion = 3;

const baseTsConfigPath = path.resolve(process.cwd(), 'tsconfig.json');
const buildTsConfigPath = path.resolve(process.cwd(), 'tsconfig.build.json');

const shouldWriteConfig = (configPath) => {
    if (fs.existsSync(configPath)) {
        const version = require(configPath).version;
        return version === undefined || version < tsConfigVersion;
    }
    return true;
};

const buildTsConfig = () => ({
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
        path.resolve(process.cwd(), 'src/**/*'),
        path.resolve(process.cwd(), 'test/**/*')
    ],
    exclude: [
        path.resolve(process.cwd(), 'node_modules'),
        path.resolve(process.cwd(), 'lib'),
        path.resolve(process.cwd(), 'build'),
        path.resolve(process.cwd(), '.yalc')
    ]
});

const createNewTsBaseConfig = () => {
    if (shouldWriteConfig(baseTsConfigPath)) {
        console.log('Writing tsconfig.json');
        const tsConfig = buildTsConfig();
        const tsConfigString = JSON.stringify(tsConfig, null, 2);
        fs.writeFileSync(baseTsConfigPath, tsConfigString, 'utf8');
    } else {
        console.log('Skipping writing tsconfig.json');
    }
};

const addOutDirToTsConfig = () => {
    const tsConfig = require(buildTsConfigPath);
    if (tsConfig.version <= tsConfigVersion && !tsConfig.compilerOptions.outDir) {
        tsConfig.compilerOptions.outDir = path.resolve(process.cwd(), 'lib');
        tsConfig.compilerOptions.declaration = true;
        const tsConfigString = JSON.stringify(tsConfig, null, 2);
        fs.writeFileSync(buildTsConfigPath, tsConfigString, 'utf8');
    }
};

const createNewTsBuildConfig = () => {
    if (shouldWriteConfig(buildTsConfigPath)) {
        console.log('Writing tsconfig.build.json');
        const tsConfig = buildTsConfig();
        const tsBuildConfig = {
            ...tsConfig,
            include: [
                path.resolve(process.cwd(), 'src/**/*')
            ]
        };
        const tsConfigString = JSON.stringify(tsBuildConfig, null, 2);
        fs.writeFileSync(buildTsConfigPath, tsConfigString, 'utf8');
    } else {
        console.log('Skipping writing tsconfig.build.json');
    }
};

const deleteTsConfigBase = () => {
    if (fs.existsSync(path.resolve(process.cwd(), 'tsconfig.base.json'))) {
        fs.rmSync(path.resolve(process.cwd(), 'tsconfig.base.json'));
    }
};

module.exports = {
    createNewTsBaseConfig,
    addOutDirToTsConfig,
    createNewTsBuildConfig,
    deleteTsConfigBase
};
