const gulp = require('gulp');
const path = require('path');
const sassLint = require('gulp-sass-lint');

gulp.task('sass-lint', () => {
    const cwd = process.cwd();
    return gulp.src(path.resolve(cwd, 'src/**/*.s+(a|c)ss'))
        .pipe(sassLint({
            configFile: path.resolve(cwd, '.sass-lint.yml')
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});
