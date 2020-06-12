import { render } from '@testing-library/react'
import { withRouter } from 'next/router'
import React from 'react'

import App from 'src/pages/_app'

describe('app', () => {
  it('app snapshot test', () => {
    expect.hasAssertions()

    const AppWithRouter = withRouter(App)

    const renderResult = render(
      <AppWithRouter Component={() => <></>} pageProps={{}} />,
    )

    expect(renderResult.asFragment()).toMatchInlineSnapshot(
      `<DocumentFragment />`,
    )
  })
})
