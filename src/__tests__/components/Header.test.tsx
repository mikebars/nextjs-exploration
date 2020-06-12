import { render } from '@testing-library/react'
import React from 'react'

import { Header } from 'src/components/Header'

describe('header', () => {
  it('header snapshot test', () => {
    expect.hasAssertions()

    const renderResult = render(<Header />)

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="text-2xl"
        />
      </DocumentFragment>
    `)
  })
})
