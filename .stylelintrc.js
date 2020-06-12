/**
 * @typedef {{
 *  defaultSeverity?: string
 *  extends?: string | Array<string>
 *  ignoreFiles?: string | Array<string>
 *  plugins?: Array<string>
 *  processors?: Array<string>
 *  rules: Record<string, boolean | string | [boolean, Record<string, unknown>] | null>
 * }} StylelintConfig
 */

/**
 * @type {StylelintConfig}
 */
const stylelintConfig = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
  },
}

module.exports = stylelintConfig
