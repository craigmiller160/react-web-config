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

module.exports = {
    paths: [
        {
            name: '@material-ui/core',
            message: 'Please use more detailed import: "@material-ui/core/ITEM"'
        },
        {
            name: '@material-ui/icons',
            message: 'Please use more detailed import: "@material-ui/icons/ITEM"'
        },
        {
            name: '@material-ui/lab',
            message: 'Please use more detailed import: "@material-ui/lab/ITEM"'
        },
        {
            name: 'date-fns',
            message: 'Please use more detailed import: "date-fns/ITEM/index"'
        },
        {
            name: 'date-fns-tz',
            message: 'Please use more detailed import: "date-fns-tz/esm/ITEM"'
        },
        {
            name: 'moment',
            message: 'MomentJS is a heavy library. Please use date-fns instead'
        }
    ],
    patterns: [
        'fp-ts/lib/*'
    ]
};