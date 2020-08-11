import { render, RenderResult } from '@testing-library/react'
import React from 'react'

import { Container } from 'src/components/Container'

describe('container', (): void => {
  it('container snapshot test', (): void => {
    expect.hasAssertions()

    const renderResult: RenderResult = render(<Container />)

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="flex flex-col items-center justify-center max-w-full"
        />
      </DocumentFragment>
    `)
  })
})
