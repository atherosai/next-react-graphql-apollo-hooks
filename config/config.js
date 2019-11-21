export const IS_SERVER = typeof window !== 'undefined';

export const {
  HOST, CUSTOM_ENV, NODE_ENV, ANALYZE, PORT, GA_TRACKING_ID = 'XXX-XXX-XXX', API_URL,
} = process.env;

export const IS_PROD = NODE_ENV === 'production';
