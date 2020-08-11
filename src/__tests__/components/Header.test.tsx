import { render, RenderResult } from '@testing-library/react'
import React from 'react'

import { Header } from 'src/components/Header'

describe('header', (): void => {
  it('header snapshot test', (): void => {
    expect.hasAssertions()

    const renderResult: RenderResult = render(<Header />)

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="text-2xl"
        />
      </DocumentFragment>
    `)
  })
})
