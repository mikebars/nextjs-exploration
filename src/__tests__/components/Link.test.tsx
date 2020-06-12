import { render } from '@testing-library/react'
import React from 'react'

import { Link } from 'src/components/Link'

describe('link', () => {
  it('link snapshot test', () => {
    expect.hasAssertions()

    const renderResult = render(<Link href="" />)

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <a
          class="hover:underline"
        />
      </DocumentFragment>
    `)
  })
})
