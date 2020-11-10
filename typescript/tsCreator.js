const path = require('path');
const fs = require('fs');

const tsConfigVersion = 1;

const internalTsConfigPath = path.resolve(process.cwd(), 'node_modules', 'tsconfig.json');
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
    if (tsConfig.version <= tsConfigVersion && !tsConfig.outDir) {
        tsConfig.outDir = path.resolve(process.cwd(), 'lib');
        tsConfig.declaration = true;
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
