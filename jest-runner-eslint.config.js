/**
 * @typedef {typeof defaultJestRunnerESLintConfig} JestRunnerESLintConfig
 */

/**
 * @type {JestRunnerESLintConfig}
 */
const jestRunnerESLintConfig = {
  config: './.eslintrc.js',
  ignorePath: './.eslintignore',
}

module.exports = jestRunnerESLintConfig

/* tslint:disable:no-null-keyword */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const defaultJestRunnerESLintConfig = {
  cache: false,
  cacheLocation: '.eslintcache',
  config: null,
  env: [],
  ext: ['.js'],
  fix: false,
  fixDryRun: false,
  format: null,
  global: [],
  ignorePath: null,
  ignorePattern: [],
  maxWarnings: -1,
  noEslintrc: false,
  noIgnore: false,
  noInlineConfig: false,
  parser: null,
  parserOptions: {},
  plugin: [],
  quiet: false,
  reportUnusedDisableDirectives: false,
  rules: {},
  rulesdir: [],
}
/* tslint:enable:no-null-keyword */
