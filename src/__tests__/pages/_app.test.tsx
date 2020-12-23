import { render, RenderResult } from '@testing-library/react'
import type { ExcludeRouterProps as Next_ExcludeRouterProps } from 'next/dist/client/with-router'
import { withRouter } from 'next/router'
import React, { ComponentType, Fragment, ReactElement } from 'react'

import { App, Props as AppProps } from 'src/pages/_app'

describe('app', (): void => {
  it('app snapshot test', (): void => {
    expect.hasAssertions()

    const AppWithRouter: ComponentType<
      Next_ExcludeRouterProps<AppProps>
    > = withRouter(App)

    const renderResult: RenderResult = render(
      <AppWithRouter
        Component={(): ReactElement => <Fragment key="App" />}
        pageProps={{}}
      />,
    )

    expect(renderResult.asFragment()).toMatchInlineSnapshot(
      `<DocumentFragment />`,
    )
  })
})
