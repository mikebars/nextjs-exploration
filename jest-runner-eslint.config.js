/***************************************************************************/
/*                                                                         */
/* `nextjs-exploration` - Workspace - `jest-runner-eslint.config.js`       */
/*                                                                         */
/***************************************************************************/

/** @typedef {import('jest-runner-eslint.config').JestRunnerESLintConfiguration} JestRunnerESLintConfiguration */

/** @type {JestRunnerESLintConfiguration} */
const jestRunnerESLintConfig = {
  cache: true,
  cacheLocation: '.eslintcache',
  config: '.eslintrc.json',
  ignorePath: '.eslintignore',
  maxWarnings: 0,
}

/* eslint-disable-next-line unicorn/prefer-module */
module.exports = jestRunnerESLintConfig
