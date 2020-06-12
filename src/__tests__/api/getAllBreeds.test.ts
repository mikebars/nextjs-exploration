import * as fc from 'fast-check'
import * as fp from 'fp-ts'

import { getAllBreeds } from 'src/api/getAllBreeds'
import { defaultAllBreedsSuccess } from 'src/__tests__/api/getAllBreeds.test.helpers'
import {
  environmentArbitrary,
  fetchReturnFailure,
  fetchReturnSuccess,
} from 'src/__tests__/lib/api.test.helpers'

describe('getAllBreeds', () => {
  it('getAllBreeds should produce valid output for valid input', async () => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        environmentArbitrary(() => fetchReturnSuccess(defaultAllBreedsSuccess)),
        async (r) => {
          const response = await getAllBreeds(r)()

          const isValid = fp.either.isRight(response)

          expect(isValid).toBe(true)

          return isValid
        },
      ),
    )
  })

  it('getAllBreeds should produce invalid output for invalid input', async () => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        environmentArbitrary(() => fetchReturnFailure('failure')),
        async (r) => {
          const response = await getAllBreeds(r)()

          const isInvalid = fp.either.isLeft(response)

          expect(isInvalid).toBe(true)

          return isInvalid
        },
      ),
    )
  })
})
