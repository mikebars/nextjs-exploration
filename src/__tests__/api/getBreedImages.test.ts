import * as fc from 'fast-check'
import * as fp from 'fp-ts'

import {
  BreedImages,
  generateGetBreedImages,
  GenerateGetBreedImagesParams,
} from 'src/api/getBreedImages'
import type { ApiEnvironment } from 'src/lib/api'
import { defaultBreedImagesSuccess } from 'src/__tests__/api/getBreedImages.test.helpers'
import {
  environmentArbitrary,
  fetchReturnFailure,
  fetchReturnSuccess,
} from 'src/__tests__/lib/api.test.helpers'

describe('generateGetBreedImages', (): void => {
  it('generateGetBreedImages should produce valid output for valid input', async (): Promise<
    void
  > => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fc.record({ breed: fc.string() }),
        environmentArbitrary(
          (): Promise<Response> =>
            fetchReturnSuccess(defaultBreedImagesSuccess),
        ),
        async (
          params: GenerateGetBreedImagesParams,
          r: ApiEnvironment,
        ): Promise<boolean> => {
          const response: BreedImages = await generateGetBreedImages(params)(
            r,
          )()

          const isValid: boolean = fp.either.isRight(response)

          expect(isValid).toBe(true)

          return isValid
        },
      ),
    )
  })

  it('generateGetBreedImages should produce invalid output for invalid input', async (): Promise<
    void
  > => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fc.record({ breed: fc.string() }),
        environmentArbitrary(
          (): Promise<Response> => fetchReturnFailure('failure'),
        ),
        async (
          params: GenerateGetBreedImagesParams,
          r: ApiEnvironment,
        ): Promise<boolean> => {
          const response: BreedImages = await generateGetBreedImages(params)(
            r,
          )()

          const isInvalid: boolean = fp.either.isLeft(response)

          expect(isInvalid).toBe(true)

          return isInvalid
        },
      ),
    )
  })
})
