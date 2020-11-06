const createPresetEnv = (modules, corejs) => ([
    '@babel/preset-env',
    {
        modules,
        usage: 'entry',
        corejs
    }
]);

module.exports = createPresetEnv;
