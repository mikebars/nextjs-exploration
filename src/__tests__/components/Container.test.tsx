import { render } from '@testing-library/react'
import React from 'react'

import { Container } from 'src/components/Container'

describe('container', () => {
  it('container snapshot test', () => {
    expect.hasAssertions()

    const renderResult = render(<Container />)

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="flex flex-col items-center justify-center max-w-full"
        />
      </DocumentFragment>
    `)
  })
})
