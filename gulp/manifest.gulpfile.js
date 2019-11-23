const gulp = require('gulp');
const path = require('path');
const fs = require('fs');

// TODO need to filter out LICENSE and html files
// TODO need to remove cwd and build from file paths

const cwd = process.cwd();

console.log('CWD', cwd); // TODO delete this

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
        if (/\.js$/.test(cleanFile(file))) {
            acc.js.push(file);
        } else if (/\.css$/.test(file)) {
            acc.css.push(cleanFile(file));
        } else {
            acc.other.push(cleanFile(file));
        }
        return acc;
    }, { js: [], css: [], other: [] });

    fs.writeFileSync(path.resolve(cwd, 'build/file-manifest.json'), JSON.stringify(output));
};

gulp.task('file-manifest', (cb) => {
    createManifest();
    cb();
});
