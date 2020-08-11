import { render, RenderResult } from '@testing-library/react'
import React from 'react'

import { Link } from 'src/components/Link'

describe('link', (): void => {
  it('link snapshot test', (): void => {
    expect.hasAssertions()

    const renderResult: RenderResult = render(<Link href="" />)

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <a
          class="hover:underline"
        />
      </DocumentFragment>
    `)
  })
})
