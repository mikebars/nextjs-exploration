import * as fc from 'fast-check'
import * as fp from 'fp-ts'

import { generateGetSubBreedImages } from 'src/api/getSubBreedImages'
import { defaultSubBreedImagesSuccess } from 'src/__tests__/api/getSubBreedImages.test.helpers'
import {
  environmentArbitrary,
  fetchReturnFailure,
  fetchReturnSuccess,
} from 'src/__tests__/lib/api.test.helpers'

describe('generateGetSubBreedImages', () => {
  it('generateGetSubBreedImages should produce valid output for valid input', async () => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fc.record({ breed: fc.string(), subBreed: fc.string() }),
        environmentArbitrary(() =>
          fetchReturnSuccess(defaultSubBreedImagesSuccess),
        ),
        async (params, r) => {
          const response = await generateGetSubBreedImages(params)(r)()

          const isValid = fp.either.isRight(response)

          expect(isValid).toBe(true)

          return isValid
        },
      ),
    )
  })

  it('generateGetSubBreedImages should produce invalid output for invalid input', async () => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fc.record({ breed: fc.string(), subBreed: fc.string() }),
        environmentArbitrary(() => fetchReturnFailure('failure')),
        async (params, r) => {
          const response = await generateGetSubBreedImages(params)(r)()

          const isInvalid = fp.either.isLeft(response)

          expect(isInvalid).toBe(true)

          return isInvalid
        },
      ),
    )
  })
})
