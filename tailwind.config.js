/***************************************************************************/
/*                                                                         */
/* `nextjs-exploration` - Workspace - `tailwind.config.js`                 */
/*                                                                         */
/***************************************************************************/

/** @type {import('tailwind.config').TailwindConfig} */
const tailwindConfig = {
  darkMode: false,
  plugins: [],
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
}

/* eslint-disable-next-line unicorn/prefer-module */
module.exports = tailwindConfig
