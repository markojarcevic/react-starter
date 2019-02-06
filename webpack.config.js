const merge = require('webpack-merge');
const commonConfig = require('./config/webpack/webpack.common.js');

const envAlias = {
  development: 'dev',
  production: 'prod',
};

const env = envAlias[process.env.NODE_ENV || 'development'];
const envConfig = require(`./config/webpack/webpack.${env}.js`);

module.exports = merge(commonConfig, envConfig);
