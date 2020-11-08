const fs = require('fs');
const path = require('path');
const glob = require('glob');

const cwd = process.cwd();
const libPath = path.resolve(cwd, 'lib');
const srcPath = path.resolve(cwd, 'src');

const copyLibResources = () => {
    glob.sync(`${srcPath}/**/*.scss`)
        .map((file) => {
            const relative = file.replace(srcPath, '');
            return [file, `${libPath}${relative}`];
        })
        .forEach(([src, dest]) => fs.copyFileSync(src, dest));
};

module.exports = copyLibResources;
