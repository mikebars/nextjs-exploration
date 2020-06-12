/**
 * @typedef {import('@jest/types').Config.InitialOptions} JestConfig
 * @typedef {import('@jest/types').Config.ProjectConfig} JestProjectConfig
 */

/**
 * @type {JestProjectConfig}
 */
const jestTestProjectConfig = {
  displayName: 'Test',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  modulePaths: ['<rootDir>'],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)'],
}

/**
 * @type {JestProjectConfig}
 */
const jestESLintProjectConfig = {
  displayName: 'ESLint',
  runner: 'jest-runner-eslint',
  testMatch: [
    '<rootDir>/**/*.js',
    '<rootDir>/**/*.jsx',
    '<rootDir>/**/*.ts',
    '<rootDir>/**/*.tsx',
  ],
}

/**
 * @type {Array<string>}
 */
const ignorePatterns = [
  '<rootDir>/.next',
  '<rootDir>/coverage',
  '<rootDir>/node_modules',
  '<rootDir>/out',
]

/**
 * @type {JestConfig}
 */
const jestConfig = {
  coveragePathIgnorePatterns: ignorePatterns,
  modulePathIgnorePatterns: ignorePatterns,
  projects: [jestTestProjectConfig, jestESLintProjectConfig],
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
