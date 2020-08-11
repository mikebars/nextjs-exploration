import * as fc from 'fast-check'

import { errorsMap, errorsOf } from 'src/lib/errors'

describe('errorsMap', (): void => {
  it('errorsMap output contains input', (): void => {
    expect.hasAssertions()

    fc.assert(
      fc.property(fc.array(fc.anything()), (input: Array<unknown>): boolean => {
        const output: Array<Error> = errorsMap(input)

        const inputAndOutputEmpty: boolean =
          input.length === 0 && output.length === 0

        const containsInput: boolean = output.some((o: Error): boolean =>
          input.some((i: unknown): boolean => o.message === String(i)),
        )

        const test: boolean = inputAndOutputEmpty || containsInput

        expect(test).toBe(true)

        return test
      }),
      { verbose: true },
    )
  })
})

describe('errorsOf', (): void => {
  it('errorsOf output contains input', (): void => {
    expect.hasAssertions()

    fc.assert(
      fc.property(fc.anything(), (input: unknown): boolean => {
        const output: Array<Error> = errorsOf(input)

        const containsInput: boolean = output.some(
          (o: Error): boolean => o.message === String(input),
        )

        expect(containsInput).toBe(true)

        return containsInput
      }),
    )
  })
})
