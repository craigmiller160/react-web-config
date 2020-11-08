const path = require('path');
const { defaults } = require('jest-config');

module.exports = {
    ...defaults,
    roots: [
        process.cwd()
    ],
    setupFilesAfterEnv: [
        path.resolve(process.cwd(), 'test', 'setup.ts') // TODO migrate this to this project
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        path.resolve(process.cwd(), 'src/**/*.{js,jsx,ts,tsx}'),
        `!${path.resolve(process.cwd(), 'node_modules')}`,
        `!${path.resolve(process.cwd(), 'src/**/*.d.ts')}`
    ],
    moduleNameMapper: {
        '\\.(scss)$': 'identity-obj-proxy'
    },
    modulePaths: [
        path.resolve(process.cwd(), 'src')
    ],
    testMatch: [
        path.resolve(process.cwd(), 'test/**/*.test.{js,jsx,ts,tsx}')
    ],
    moduleDirectories: [
        path.resolve(process.cwd(), 'node_modules'),
        path.resolve(process.cwd(), 'src')
    ],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    modulePathIgnorePatterns: [
        path.resolve(process.cwd(), '.yalc')
    ],
    preset: 'ts-jest' // TODO try using a transformer instead so you can cover JS & TS files
};
