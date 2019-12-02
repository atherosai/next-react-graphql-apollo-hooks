import { config } from 'dotenv';
import path from 'path';

const { NODE_ENV, CUSTOM_ENV } = process.env;

const DIR = path.resolve(__dirname, NODE_ENV === 'production' ? '../../..' : '../..');

if (!process.env.CUSTOM_ENV) {
  throw new Error('CUSTOM environment variable is not set');
}

config({
  path: `${DIR}/secrets/${NODE_ENV}-${CUSTOM_ENV}.env`,
});

export default {
  CUSTOM_ENV: process.env.CUSTOM_ENV,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  IS_PROD: process.env.NODE_ENV === 'production',
  BUNDLE_ANALYZE: process.env.BUNDLE_ANALYZE,
};
