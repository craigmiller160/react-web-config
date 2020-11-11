process.env.NODE_ENV = 'production';
process.env.ANALYZE = 'true';

require('./utils/executeWebpack')();