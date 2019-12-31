const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const path = require('path');
require('./resources.gulpfile');

gulp.task('compileJS', () => {
	const cwd = process.cwd();
	const babelConfig = require(`${cwd}/babel.config.js`);
	return gulp.src([
			path.resolve(cwd, './src/**/*.js'),
			path.resolve(cwd, './src/**/*.jsx')
		])
		.pipe(babel(babelConfig))
		.pipe(gulp.dest(path.resolve(cwd, 'lib')));
});

gulp.task('clean', () => {
	const cwd = process.cwd();
	return gulp.src(path.resolve(cwd, 'lib'), { allowEmpty: true })
		.pipe(clean());
});

gulp.task('buildLib', gulp.series('clean', 'compileJS', 'copy-resources'));