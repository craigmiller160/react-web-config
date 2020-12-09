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
const { defaults } = require('jest-config');
const libsToRecompile = require('./libsToRecompile');

module.exports = {
    ...defaults,
    roots: [
        process.cwd()
    ],
    setupFilesAfterEnv: [
        path.resolve(__dirname, 'setup.js')
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        path.resolve(process.cwd(), 'src/**/*.{js,jsx,ts,tsx}'),
        `!${path.resolve(process.cwd(), 'node_modules')}`,
        `!${path.resolve(process.cwd(), 'src/**/*.d.ts')}`
    ],
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy'
    },
    modulePaths: [
        path.resolve(process.cwd(), 'src')
    ],
    testMatch: [
        path.resolve(process.cwd(), 'test/**/*.{test,Spec}.{js,jsx,ts,tsx}')
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
    transformIgnorePatterns: [
        `node_modules/(?!${libsToRecompile.join('|')}).*$`
    ],
    transform: {
        '^.+\\.jsx?$': path.resolve(__dirname, './jsTransformer.js'),
        '^.+\\.tsx?$': 'ts-jest'
    }
};
