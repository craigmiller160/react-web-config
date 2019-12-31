module.exports = {
    transform: {
        '^.+\.jsx?$': path.resolve(__dirname, './utils/transformer.js') // TODO remember typescript customizations
    }
};
