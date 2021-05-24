/***************************************************************************/
/*                                                                         */
/* `nextjs-exploration` - Workspace - `postcss.config.js`                  */
/*                                                                         */
/***************************************************************************/

/** @type {import('postcss.config').PostCSSConfig} */
const postCSSConfig = {
  /* eslint-disable sort-keys */
  /* tslint:disable: object-literal-sort-keys */
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      features: {
        'custom-properties': false,
      },
      stage: 3,
    },
  },
  /* tslint:enable: object-literal-sort-keys */
  /* eslint-enable sort-keys */
}

/* eslint-disable-next-line unicorn/prefer-module */
module.exports = postCSSConfig
