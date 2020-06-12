import { render } from '@testing-library/react'
import React from 'react'

import Index from 'src/pages/index'

describe('index', () => {
  it('index snapshot test', () => {
    expect.hasAssertions()

    const renderResult = render(<Index />)

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="p-6 flex flex-col items-center justify-center max-w-full"
        >
          <div
            class="p-3 text-2xl"
          >
            Dog Api!
          </div>
          <div
            class="p-3 flex flex-col items-center justify-center max-w-full"
          >
            <a
              class="hover:underline"
              href="/breeds"
            >
              See all breeds
            </a>
          </div>
        </div>
      </DocumentFragment>
    `)
  })
})
