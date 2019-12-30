const gulp = require('gulp');
const tslint = require('gulp-tslint');
const path = require('path');

gulp.task('tslint', () => {
    const cwd = process.cwd();
    const tslintConfig = path.resolve(cwd, 'tslint.json');
    return gulp.src([
        path.resolve(cwd, 'src/**/*.ts'),
        path.resolve(cwd, 'src/**/*.tsx'),
        path.resolve(cwd, 'test/**/*.ts'),
        path.resolve(cwd, 'test/**/*.tsx')
    ])
        .pipe(tslint({
            formatter: 'verbose',
            configuration: tslintConfig
        }))
        .pipe(tslint.report());
});
