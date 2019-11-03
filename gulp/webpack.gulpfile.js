const gulp = require('gulp');
const env = require('gulp-env');
const webpackStream = require('webpack-stream');
const path = require('path');

gulp.task('webpack', () => {
	const webpackEnvs = env({
		vars: {
			NODE_ENV: 'production',
			WEBPACK_ENV: 'production'
		}
	});

	const cwd = process.cwd();
	const webpackConfigPath = path.resolve(cwd, 'webpack.config.js');

	const webpackConfig = require(webpackConfigPath);

	return gulp.src(path.resolve(cwd, 'src'))
		.pipe(webpackEnvs)
		.pipe(webpackStream({
			config: webpackConfig
		}))
		.pipe(gulp.dest('dist'));
});