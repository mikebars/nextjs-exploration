import { render } from '@testing-library/react'
import React from 'react'

import { Errors } from 'src/components/Errors'

describe('errors', () => {
  it('errors snapshot test', () => {
    expect.hasAssertions()

    const renderResult = render(<Errors errors={[Error('')]} />)

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="flex flex-col items-center justify-center max-w-full"
        >
          <div
            class="text-2xl"
          >
            Encountered the following errors:
          </div>
          <div
            class="space-y-2 flex flex-col items-center justify-center max-w-full"
          >
            <div
              class="break-words w-3/4"
            />
          </div>
        </div>
      </DocumentFragment>
    `)
  })
})
