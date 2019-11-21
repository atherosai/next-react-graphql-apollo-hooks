import { config } from 'dotenv';
import path from 'path';

const DIR = path.resolve(__dirname, '../..');
if (!process.env.CUSTOM_ENV) {
  throw new Error('CUSTOM environment variable is not set');
}
if (process.env.NODE_ENV === 'production') {
  config({
    path: `${DIR}/../secrets/${process.env.NODE_ENV}-${process.env.CUSTOM_ENV}.env`,
  });
} else {
  config({
    path: `${DIR}/secrets/${process.env.NODE_ENV}-${process.env.CUSTOM_ENV}.env`,
  });
}

export default {
  CUSTOM_ENV: process.env.CUSTOM_ENV,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  IS_PROD: process.env.NODE_ENV === 'production',
  BUNDLE_ANALYZE: process.env.BUNDLE_ANALYZE,
};
