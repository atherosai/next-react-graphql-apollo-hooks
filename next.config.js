const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require('path');
const withGraphQL = require('next-plugin-graphql');
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const { NODE_ENV, CUSTOM_ENV } = require('./config/config');

const configureWebpack = config => {
  config.plugins.push(
    new Dotenv({
      path: path.join(__dirname, `/secrets/${NODE_ENV}-${CUSTOM_ENV}.env`),
      safe: true
    })
  );

  if (NODE_ENV === 'development') {
    config.devtool = 'cheap-module-source-map';
  }

  config.plugins.push(
    new webpack.ContextReplacementPlugin(
      /graphql-language-service-interface[\\/]dist$/,
      new RegExp(`^\\./.*\\.js$`)
    )
  );

  config.plugins.push(
    new SWPrecacheWebpackPlugin({
      verbose: true,
      staticFileGlobsIgnorePatterns: [/\.next\//],
      runtimeCaching: [
        {
          handler: 'networkFirst',
          urlPattern: /^https?.*/
        }
      ]
    })
  );

  return config;
};

const config = withOptimizedImages(
  withBundleAnalyzer(
    withGraphQL(
      withSass({
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]'
        },
        webpack: configureWebpack
      })
    )
  )
);

// turn serverless on
config.target = 'serverless';

module.exports = config;
