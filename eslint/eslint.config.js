const config = {
	extends: [
		'airbnb'
	],
	parser: 'babel-eslint',
	rules: {
		'no-tabs': 0,
		'react/jsx-indent': 0,
		'indent': 0,
		'react/jsx-filename-extension': 0
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