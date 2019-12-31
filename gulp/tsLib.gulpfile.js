const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const path = require('path');
require('./resources.gulpfile');
require('./jsLib.gulpfile');

gulp.task('clean', () => {
    const cwd = process.cwd();
    return gulp.src(path.resolve(cwd, 'lib'), { allowEmpty: true })
        .pipe(clean());
});

gulp.task('compileTS', () => {
    const cwd = process.cwd();
    const babelConfig = require(`${cwd}/babel.config`);
    const project = ts.createProject(path.resolve(cwd, 'tsconfig.json'));
    return gulp.src([
        path.resolve(cwd, 'src/**/*.ts'),
        path.resolve(cwd, 'src/**/*.tsx')
    ])
        .pipe(sourcemaps.init())
        .pipe(project())
        .pipe(babel(babelConfig))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lib'));
});

gulp.task('buildLib', gulp.series('clean', 'compileTS', 'compileJS', 'copy-resources'));
