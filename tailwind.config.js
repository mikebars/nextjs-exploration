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

module.exports = tailwindConfig
