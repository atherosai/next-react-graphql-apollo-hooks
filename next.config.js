const sass = require('@zeit/next-sass');
// const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require('path');
const graphql = require('next-plugin-graphql');
const images = require('next-optimized-images');
const { withPlugins } = require('next-compose-plugins');
const analyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { NODE_ENV, CUSTOM_ENV } = require('./config/config');

const nextConfig = {
  webpack: (config) => {
    const enhancedConfig = config;
    enhancedConfig.node = {
      fs: 'empty',
    };
    enhancedConfig.plugins.push(...[
      new Dotenv({
        path: path.join(__dirname, `/secrets/${NODE_ENV}-${CUSTOM_ENV}.env`), // Path to .env file (this is the default)
        // safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
      }),
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/,
          },
        ],
      }),
      // new webpack.ContextReplacementPlugin(
      //   /graphql-language-service-interface[\\/]dist$/,
      //   new RegExp('^\\./.*\\.js$'),
      // ),
    ]);


    if (NODE_ENV === 'development') {
      enhancedConfig.devtool = 'cheap-module-source-map';
    }

    enhancedConfig.resolve.extensions = config.resolve.extensions.concat([
      '.ts',
      '.tsx',
    ]);

    return config;
  },
};

const config = withPlugins(
  [
    [
      sass,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]',
        },
      },
    ],
    graphql,
    images,
    analyzer,
  ],
  nextConfig,
);

module.exports = config;
