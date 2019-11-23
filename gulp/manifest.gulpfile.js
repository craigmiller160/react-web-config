const gulp = require('gulp');
const path = require('path');
const fs = require('fs');

const cwd = process.cwd();

const walk = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const fullFilePath = `${dir}/${file}`;
        const stat = fs.statSync(fullFilePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullFilePath));
        } else {
            results.push(fullFilePath);
        }
    });
    return results;
};

const cleanFile = (file) =>
    file.replace(cwd, '')
        .replace('/build', '');

const createManifest = () => {
    const files = walk(path.resolve(cwd, 'build'));

    const output = files.reduce((acc, file) => {
        if (/\.js$/.test(file)) {
            acc.js.push(cleanFile(file));
        } else if (/\.css$/.test(file)) {
            acc.css.push(cleanFile(file));
        } else if (/.LICENSE$/.test(file)) {
            acc.lic.push(cleanFile(file));
        } else if (/.html$/.test(file)) {
            acc.html.push(cleanFile(file));
        } else {
            acc.other.push(cleanFile(file));
        }
        return acc;
    }, { js: [], css: [], lic: [], html: [], other: [] });

    fs.writeFileSync(path.resolve(cwd, 'build/file-manifest.json'), JSON.stringify(output));
};

gulp.task('file-manifest', (cb) => {
    createManifest();
    cb();
});
