/***************************************************************************/
/*                                                                         */
/* `nextjs-exploration` - Workspace - `.stylelintrc.js`                    */
/*                                                                         */
/***************************************************************************/

/* eslint-disable capitalized-comments, multiline-comment-style, unicorn/prefer-module */

/** @type {Partial<import('stylelint').Configuration>} */
const stylelintRC = {
  // The default severity level for all rules that do not have a severity specified in their secondary options.
  defaultSeverity: 'error',

  // Your configuration can extend an existing configuration(s) (whether your own or a third-party config).
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-primer',
    'stylelint-config-wikimedia',
    'stylelint-config-wordpress',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],

  // Provide a glob or array of globs to ignore specific files.
  // ignoreFiles: [
  //   // '**/*.*',
  //   // '!**//.*.css',
  //   // '!**//.*.js',
  //   // '!**//.*.jsx',
  //   // '!**//.*.sass',
  //   // '!**//.*.scss',
  //   // '!**//.*.ts',
  //   // '!**//.*.tsx',
  //   // '!**/*.css',
  //   // '!**/*.js',
  //   // '!**/*.jsx',
  //   // '!**/*.sass',
  //   // '!**/*.scss',
  //   // '!**/*.ts',
  //   // '!**/*.tsx',
  // ],

  // Plugins are rules or sets of rules built by the community that support methodologies, toolsets, non-standard CSS features, or very specific use cases.
  plugins: [
    'stylelint-a11y',
    'stylelint-config-rational-order/plugin',
    'stylelint-csstree-validator',
    'stylelint-no-unsupported-browser-features',
    'stylelint-order',
    'stylelint-prettier',
    'stylelint-selector-bem-pattern',
  ],

  // Processors are functions that hook into stylelint's pipeline, modifying code on its way into stylelint and modifying results on their way out.
  // processors: [],

  // A map of rules that will be used to lint style-containing files.
  rules: {
    // CSS syntax validator based on csstree as plugin for stylelint.
    'csstree/validator': true,

    // Runs Prettier as a Stylelint rule and reports differences as individual Stylelint issues.
    'prettier/prettier': true,
  },
}

module.exports = stylelintRC

/* eslint-enable capitalized-comments, multiline-comment-style, unicorn/prefer-module */
