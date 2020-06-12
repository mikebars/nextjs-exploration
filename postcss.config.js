/**
 * @typedef {{
 *  plugins: Array<string | [string, Record<string, unknown>]>
 * }} PostCSSConfig
 */

/**
 * @type {PostCSSConfig}
 */
const defaultPostCSSConfig = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        features: {
          'custom-properties': false,
        },
        stage: 3,
      },
    ],
  ],
}

/**
 * @type {PostCSSConfig}
 */
const postCSSConfig = {
  ...defaultPostCSSConfig,
  plugins: ['postcss-import', 'tailwindcss', ...defaultPostCSSConfig.plugins],
}

module.exports = postCSSConfig
