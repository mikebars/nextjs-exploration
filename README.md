# Next.js exploration

This is an example app built with Next.js to help understand the included functionality in combination with my usual building and testing toolkit.

## Get Started

Scripts:

```
/**
  * Next.js - https://nextjs.org/docs/api-reference/cli
  */
/** next build && next export && next serve */
yarn next
/** next build */
yarn next:build
/** next dev */
yarn next:dev
/** next export */
yarn next:export
/** next start */
yarn next:start

/**
  * Linting
  */
/** prettier && eslint && stylelint && tslint && tsc */
yarn lint

/**
  * Testing
  */
/** jest --coverage */
yarn test
```

## Overview

- Next.js

  - `getStaticProps` for full static site generation

- `fp-ts`

  - `Reader` and `ReaderTaskEither` for dependency injection
  - `io-ts` for decoding

- Styling

  - TailwindCSS for generating atomic class names
  - PostCSS for applying plugins like `autoprefixer` and `postcss-preset-env`

- Linting + Static Analysis

  - ESLint + `@typescript-eslint`
  - TSLint + `tslint-microsoft-contrib` & `tslint-sonarts` + strictest settings
  - StyleLint
  - TypeScript + strictest settings
  - Prettier

- Testing
  - Jest (100% coverage)
  - React Testing Library
  - `fast-check` (property testing)
