import type { NextComponentType } from 'next'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import React, { ReactElement } from 'react'

import type { EmptyProps } from 'src/lib/react'
import 'src/styles/index.css'

export type Props = AppProps<EmptyProps>

export const App: NextComponentType<AppContext, AppInitialProps, Props> = (
  props: Props,
): ReactElement => <props.Component {...(props.pageProps as EmptyProps)} />

/* tslint:disable-next-line:no-default-export */
export default App
