const path = require('path');
const fs = require('fs');

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

const files = walk('./files');

const output = files.reduce((acc, file) => {
    if (/\.js$/.test(file)) {
        acc.js.push(file);
    } else if (/\.css$/.test(file)) {
        acc.css.push(file);
    } else {
        acc.other.push(file);
    }
}, { js: [], css: [], other: [] });

fs.writeFileSync('./file-manifest.json', JSON.stringify(output, null, 2));