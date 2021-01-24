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

const { configure } = require('enzyme');
const React16Adapter = require('enzyme-adapter-react-16');
const React17Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const { requireProjectConfig } = require('../utils/requireConfigs');

const projectConfig = requireProjectConfig();
switch (projectConfig.enzymeReactVersion) {
    case 16:
        configure({ adapter: new React16Adapter() });
        break;
    case 17:
        configure({ adapter: new React17Adapter() });
        break;
    default:
        throw new Error(`Invalid enzymeReactVersion: ${projectConfig.enzymeReactVersion}`);
}

beforeEach(() => {
    jest.clearAllMocks();
});
