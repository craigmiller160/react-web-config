const { defaults } = require('jest-config');
const path = require('path');

// this transformIgnorePatterns section should be used if we need to handle recompiling libraries
// `[\\\/]node_modules[\\\/](?!(${librariesToRecompile})).*$`

module.exports = {
    ...defaults,
    bail: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'test/**/*.{js,jsx,ts,tsx}'
    ],
    moduleNameMapper: {
        '\.(css|scss|sass)$': path.resolve(__dirname, './utils/styleMock.js'),
        '\.(gif|ttf|eot|svg|png)': path.resolve(__dirname, './utils/fileMock.js'),
        '\.worker.js': path.resolve(__dirname, './utils/workerMock.js'),
        '\.worker.entry.js': path.resolve(__dirname, './utils/workerMock.js')
    },
    modulePaths: [
        '<rootDir>/src'
    ],
    testMatch: [
        '<rootDir>/test/**/*.{test,Spec}.{js,jsx,ts,tsx}'
    ],
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ],
    transform: {
        '^.+\.jsx?$': path.resolve(__dirname, './utils/transformer.js') // TODO remember typescript customizations
    },
    modulePathIgnorePatterns: [
        '<rootDir>/.yalc'
    ]
};
