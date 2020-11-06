const createPresetEnv = (modules) => ([
	'@babel/preset-env',
	{
		modules
	}
]);

module.exports = createPresetEnv;