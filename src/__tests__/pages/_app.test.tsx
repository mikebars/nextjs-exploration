import { render, RenderResult } from '@testing-library/react'
import type { ExcludeRouterProps } from 'next/dist/client/with-router'
import { withRouter } from 'next/router'
import React, { ComponentType, ReactElement } from 'react'

import { App, Props as AppProps } from 'src/pages/_app'

describe('app', (): void => {
  it('app snapshot test', (): void => {
    expect.hasAssertions()

    const AppWithRouter: ComponentType<ExcludeRouterProps<
      AppProps
    >> = withRouter(App)

    const renderResult: RenderResult = render(
      <AppWithRouter Component={(): ReactElement => <></>} pageProps={{}} />,
    )

    expect(renderResult.asFragment()).toMatchInlineSnapshot(
      `<DocumentFragment />`,
    )
  })
})
