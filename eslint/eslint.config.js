const config = {
	extends: [
		'airbnb'
	],
	parser: 'babel-eslint',
	rules: {
		'no-tabs': 0,
		'react/jsx-indent': 0,
		'indent': 0,
		'react/jsx-filename-extension': 0,
		'no-console': 'error',
		'react/jsx-curly-spacing': [ 2, { 'when': 'always', allowMultiline: false } ],
		'react/jsx-indent-props': 0,
		'no-trailing-spaces': 0,
		'comma-dangle': ['error', 'never']
	},
	globals: {
		window: true,
		document: true,
		isNaN: true,
		requestAnimationFrame: true,
		localStorage: true,
		sessionStorage: true,
		fetch: true
	}
};

module.exports = config;