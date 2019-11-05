const gulp = require('gulp');
const path = require('path');

const imageExts = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'svg'];
const fontExts = ['eot', 'otf', 'svg', 'ttf', 'woff', 'woff2'];
const styleExts = ['css', 'scss'];
const allExts = imageExts.concat(fontExts).concat(styleExts);

gulp.task('copy-resources', () => {
    const cwd = process.cwd();
    return gulp.src(path.resolve(cwd, `src/**/*.{${allExts.join(',')}}`))
        .pipe(gulp.dest(path.resolve(cwd, 'lib')));
});