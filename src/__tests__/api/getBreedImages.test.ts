import * as fc from 'fast-check'
import * as fp from 'fp-ts'

import { generateGetBreedImages } from 'src/api/getBreedImages'
import { defaultBreedImagesSuccess } from 'src/__tests__/api/getBreedImages.test.helpers'
import {
  environmentArbitrary,
  fetchReturnFailure,
  fetchReturnSuccess,
} from 'src/__tests__/lib/api.test.helpers'

describe('generateGetBreedImages', () => {
  it('generateGetBreedImages should produce valid output for valid input', async () => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fc.record({ breed: fc.string() }),
        environmentArbitrary(() =>
          fetchReturnSuccess(defaultBreedImagesSuccess),
        ),
        async (params, r) => {
          const response = await generateGetBreedImages(params)(r)()

          const isValid = fp.either.isRight(response)

          expect(isValid).toBe(true)

          return isValid
        },
      ),
    )
  })

  it('generateGetBreedImages should produce invalid output for invalid input', async () => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fc.record({ breed: fc.string() }),
        environmentArbitrary(() => fetchReturnFailure('failure')),
        async (params, r) => {
          const response = await generateGetBreedImages(params)(r)()

          const isInvalid = fp.either.isLeft(response)

          expect(isInvalid).toBe(true)

          return isInvalid
        },
      ),
    )
  })
})
