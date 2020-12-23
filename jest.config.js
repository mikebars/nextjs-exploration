/***************************************************************************/
/*                                                                         */
/* `nextjs-exploration` - Workspace - `jest.config.js`                     */
/*                                                                         */
/***************************************************************************/

/** @typedef {import('jest.config').JestGlobalConfiguration} JestGlobalConfiguration */
/** @typedef {import('jest.config').JestProjectConfiguration} JestProjectConfiguration */
/** @typedef {import('jest.config').JestProjectConfigurationIgnorePatterns} JestProjectConfigurationIgnorePatterns */

/** @type {JestProjectConfiguration} */
const jestESLintProjectConfig = {
  cacheDirectory: '<rootDir>/.jestcache/eslint',
  displayName: 'ESLint',
  runner: 'jest-runner-eslint',
  testMatch: [
    '<rootDir>/**//.*.cjs',
    '<rootDir>/**//.*.js',
    '<rootDir>/**//.*.jsx',
    '<rootDir>/**//.*.mjs',
    '<rootDir>/**//.*.ts',
    '<rootDir>/**//.*.tsx',
    '<rootDir>/**/*.cjs',
    '<rootDir>/**/*.js',
    '<rootDir>/**/*.jsx',
    '<rootDir>/**/*.mjs',
    '<rootDir>/**/*.ts',
    '<rootDir>/**/*.tsx',
  ],
}

/** @type {JestProjectConfiguration} */
const jestTestProjectConfig = {
  cacheDirectory: '<rootDir>/.jestcache/test',
  displayName: 'Test',
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['jest-extended'],
  testMatch: [
    '**/__tests__/**/*.test.cjs',
    '**/__tests__/**/*.test.js',
    '**/__tests__/**/*.test.jsx',
    '**/__tests__/**/*.test.mjs',
    '**/__tests__/**/*.test.ts',
    '**/__tests__/**/*.test.tsx',
  ],
}

/** @type {JestProjectConfigurationIgnorePatterns} */
const ignorePatterns = [
  '<rootDir>/**/.next/**',
  '<rootDir>/**/coverage/**',
  '<rootDir>/**/node_modules/**',
  '<rootDir>/**/out/**',
  '<rootDir>/**/patches/**',
  '<rootDir>/**/public/**',
]

/** @type {JestGlobalConfiguration} */
const jestConfig = {
  coveragePathIgnorePatterns: ignorePatterns,
  modulePathIgnorePatterns: ignorePatterns,
  projects: [
    ...(process.env.JEST_WITH_ALL || process.env.JEST_WITH_ESLINT
      ? [jestESLintProjectConfig]
      : []),
    jestTestProjectConfig,
  ],
  testPathIgnorePatterns: ignorePatterns,
  transformIgnorePatterns: ignorePatterns,
  watchPathIgnorePatterns: ignorePatterns,
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}

module.exports = jestConfig
