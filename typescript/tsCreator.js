const path = require('path');
const fs = require('fs');

const tsConfigPath = path.resolve(process.cwd(), 'tsconfig.json');

const createNewTsConfig = () => {
    const tsConfig = {
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
    fs.writeFileSync(tsConfigPath, tsConfigString, 'utf8');
};

const addOutDirToTsConfig = () => {
    const tsConfig = require(tsConfigPath);
    if (!tsConfig.outDir) {
        tsConfig.outDir = path.resolve(process.cwd(), 'lib');
        tsConfig.declaration = true;
        const tsConfigString = JSON.stringify(tsConfig, null, 2);
        fs.writeFileSync(tsConfigPath, tsConfigString, 'utf8');
    }
};

module.exports = {
    createNewTsConfig,
    addOutDirToTsConfig
};
