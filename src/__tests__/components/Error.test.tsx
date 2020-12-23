import { render, RenderResult } from '@testing-library/react'
import React from 'react'

import { Error as ErrorComponent } from 'src/components/Error'

describe('error', (): void => {
  it('error snapshot test', (): void => {
    expect.hasAssertions()

    const renderResult: RenderResult = render(
      <ErrorComponent error={new Error('Error')} />,
    )

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="break-words w-3/4"
        >
          Error
        </div>
      </DocumentFragment>
    `)
  })
})
