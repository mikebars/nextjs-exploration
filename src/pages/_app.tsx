import type { NextComponentType } from 'next'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import React from 'react'

import 'src/styles/index.css'

type Props = Record<string, unknown>

const App: NextComponentType<AppContext, AppInitialProps, AppProps<Props>> = (
  props,
) => <props.Component {...(props.pageProps as Props)} />

/* tslint:disable-next-line:no-default-export */
export default App
