const { config } = require('dotenv');
const path = require('path');

const DIR = path.resolve(__dirname, '../..');

if (!process.env.CUSTOM_ENV) {
  throw new Error('CUSTOM environment variable is not set');
}

config({
  path: `${DIR}/secrets/${process.env.NODE_ENV}-${process.env.CUSTOM_ENV}.env`
});

const appConfig = {
  CUSTOM_ENV: process.env.CUSTOM_ENV,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  IS_PROD: process.env.NODE_ENV === 'production',
  BUNDLE_ANALYZE: process.env.BUNDLE_ANALYZE
};

module.exports = appConfig;
