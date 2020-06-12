/* eslint-disable @typescript-eslint/no-var-requires */
/* tslint:disable:no-require-imports */
const path = require('path')
/* tslint:enable:no-require-imports */
/* eslint-enable @typescript-eslint/no-var-requires */

/**
 * @typedef {import('webpack').Configuration} WebpackConfiguration
 * @param {WebpackConfiguration} config
 * @returns {WebpackConfiguration}
 */
const webpack = (config) => {
  const webpackConfig = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        src: path.join(__dirname, 'src'),
      },
    },
  }

  return webpackConfig
}

const nextConfig = {
  webpack,
}

module.exports = nextConfig
