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

const archiver = require('archiver');
const fs = require('fs');
const path = require('path');
const packageJson = require(path.resolve(process.cwd(), 'package.json'));

const cwd = process.cwd();
const version = packageJson.version;
const name = packageJson.name.replace('@craigmiller160/', '');

const outputDir = path.resolve(cwd, 'deploy/build');
if (fs.existsSync(outputDir)) {
    fs.rmdirSync(outputDir, { recursive: true });
}

fs.mkdirSync(outputDir);

const output = fs.createWriteStream(path.resolve(outputDir, `${name}-${version}.zip`));
const archive = archiver('zip');

archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
        console.log(err);
    } else {
        throw err;
    }
});
archive.on('error', (err) => {
    throw err;
});
archive.pipe(output);

const files = fs.readdirSync(path.resolve(cwd, 'build'));
files.forEach((file) => {
    const stat = fs.lstatSync(path.resolve(cwd, 'build', file));
    if (stat.isDirectory()) {
        archive.directory(path.resolve(cwd, 'build', file), file);
    } else {
        archive.file(path.resolve(cwd, 'build', file), { name: file });
    }
});

archive.finalize();