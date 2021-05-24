/***************************************************************************/
/*                                                                         */
/* `nextjs-exploration` - Workspace - `next.config.js`                     */
/*                                                                         */
/***************************************************************************/

/** @typedef {import('next.config').NextConfig} NextConfig */

/* eslint-disable capitalized-comments, multiline-comment-style, unicorn/prefer-module */

const path = require('path')

const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')

/** @type {NextConfig} */
const nextConfig = () => ({
  future: {
    strictPostcssConfiguration: true,
    webpack5: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config, options) => ({
    ...config,
    plugins: [
      ...(config.plugins ?? []),
      ...(process.env.ANALYZE
        ? [
            new WebpackBundleAnalyzer.BundleAnalyzerPlugin({
              // Host that will be used in "server" mode to start HTTP server.
              // analyzerHost: '127.0.0.1',

              // Can be "server", "static" or "disabled". Defaults to "server".
              // In "server" mode analyzer will start HTTP server to show bundle report.
              // In "static" mode single HTML file with bundle report will be generated.
              // In "json" mode single JSON file with bundle report will be generated.
              // In "disabled" mode you can use this plugin to just generate Webpack Stats JSON file
              // by setting "generateStatsFile" to true.
              analyzerMode: 'static',

              // Port that will be used in "server" mode to start HTTP server.
              // analyzerPort: 8888,

              // Module sizes to show in report by default.
              // Should be one of "stat", "parsed" or "gzip".
              // defaultSizes: 'parsed',

              // Patterns that will be used to match against asset names to exclude them from the report.
              // If pattern is a string it will be converted to RegExp via new RegExp(str).
              // If pattern is a function it should have the following signature
              // (assetName: string) => boolean and should return true to exclude matching asset.
              // If multiple patterns are provided asset should match at least one of them to be excluded.
              // excludeAssets: null,

              // If true, Webpack Stats JSON file will be generated in bundles output directory.
              // generateStatsFile: false,

              // Log level.
              // Can be "info", "warn", "error" or "silent".
              // logLevel: 'info',

              // Automatically open report in default browser.
              // openAnalyzer: true,

              // Path to bundle report file that will be generated in "static" mode.
              // Relative to bundles output directory.
              reportFilename: options.isServer
                ? '../analyze/server.html'
                : './analyze/client.html',

              // Content of the HTML title element; or a function of the form () => string that provides the content.
              // reportTitle: () => {
              //   const time = new Date()

              //   const year = time.getFullYear()

              //   const month = [
              //     'Jan',
              //     'Feb',
              //     'Mar',
              //     'Apr',
              //     'May',
              //     'Jun',
              //     'Jul',
              //     'Aug',
              //     'Sep',
              //     'Oct',
              //     'Nov',
              //     'Dec',
              //   ][time.getMonth()]

              //   const day = time.getDate()

              //   /* tslint:disable:no-magic-numbers */
              //   /* eslint-disable no-magic-numbers */
              //   const hour = `0${time.getHours()}`.slice(-2)
              //   /* eslint-enable no-magic-numbers */
              //   /* tslint:enable:no-magic-numbers */

              //   /* tslint:disable:no-magic-numbers */
              //   /* eslint-disable no-magic-numbers */
              //   const minute = `0${time.getMinutes()}`.slice(-2)
              //   /* eslint-enable no-magic-numbers */
              //   /* tslint:enable:no-magic-numbers */

              //   const currentTime = `${day} ${month} ${year} at ${hour}:${minute}`

              //   return `${
              //     process.env.npm_package_name || 'Webpack Bundle Analyzer'
              //   } [${currentTime}]`
              // },

              // Name of Webpack Stats JSON file that will be generated if generateStatsFile is true.
              // Relative to bundles output directory.
              // statsFilename: 'stats.json',

              // Options for stats.toJson() method.
              // For example you can exclude sources of your modules from stats file with "source: false" option.
              // statsOptions: null,
            }),
          ]
        : []),
    ],
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        src: path.join(__dirname, 'src'),
      },
    },
  }),
})

module.exports = nextConfig

/* eslint-enable capitalized-comments, multiline-comment-style, unicorn/prefer-module */
