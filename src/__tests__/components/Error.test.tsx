import { render } from '@testing-library/react'
import React from 'react'

import { Error as ErrorComponent } from 'src/components/Error'

describe('error', () => {
  it('error snapshot test', () => {
    expect.hasAssertions()

    const renderResult = render(<ErrorComponent error={Error('')} />)

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="break-words w-3/4"
        />
      </DocumentFragment>
    `)
  })
})
