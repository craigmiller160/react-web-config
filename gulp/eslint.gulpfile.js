const gulp = require('gulp');
const eslint = require('gulp-eslint');
const path = require('path');

gulp.task('eslint', () => {
	const cwd = process.cwd();
	return gulp.src([
		path.resolve(cwd, 'src/**/*.js'),
		path.resolve(cwd, 'src/**/*.jsx'),
		path.resolve(cwd, 'test/**/*.js'),
		path.resolve(cwd, 'test/**/*.jsx')
	], { allowEmpty: true })
		.pipe(eslint({
			configFile: path.resolve(cwd, 'eslint.config.js')
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});