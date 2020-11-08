const path = require('path');
const { defaults } = require('jest-config');

module.exports = {
    ...defaults,
    setupFilesAfterEnv: [
        '<rootDir>/test/setup.ts'
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!<rootDir>/node_modules/',
        '!<rootDir>/src/**/*.d.ts'
    ],
    moduleNameMapper: {
        '\\.(scss)$': 'identity-obj-proxy'
    },
    modulePaths: [
        '<rootDir>/src'
    ],
    testMatch: [
        '<rootDir>/test/**/*.test.{ts,tsx}'
    ],
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    modulePathIgnorePatterns: [
        '<rootDir>/.yalc'
    ],
    preset: 'ts-jest' // TODO try using a transformer instead so you can cover JS & TS files
};
