import * as fc from 'fast-check'

import { errorsOf } from 'src/lib/errors'

describe('concatClassName', () => {
  it('errorsOf output contains input', () => {
    expect.hasAssertions()

    fc.assert(
      fc.property(fc.anything(), (input) => {
        const output = errorsOf(input)

        const containsInput = output.some((o) => o.message === String(input))

        expect(containsInput).toBe(true)

        return containsInput
      }),
    )
  })
})
