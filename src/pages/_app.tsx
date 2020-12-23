import type { NextComponentType as Next_NextComponentType } from 'next'
import type {
  AppContext as NextApp_AppContext,
  AppInitialProps as NextApp_AppInitialProps,
  AppProps as NextApp_AppProps,
} from 'next/app'
import React, { ReactElement } from 'react'
import 'tailwindcss/tailwind.css'

import type { EmptyProps } from 'src/lib/react'

export type Props = NextApp_AppProps<EmptyProps>

export const App: Next_NextComponentType<
  NextApp_AppContext,
  NextApp_AppInitialProps,
  Props
> = (
  props: Props,
  /* eslint-disable-next-line react/jsx-props-no-spreading */
): ReactElement => <props.Component {...(props.pageProps as EmptyProps)} />

/* tslint:disable-next-line:no-default-export */
export default App
