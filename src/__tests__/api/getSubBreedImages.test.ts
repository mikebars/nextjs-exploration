import * as fc from 'fast-check'
import * as fp from 'fp-ts'

import {
  generateGetSubBreedImages,
  GenerateGetSubBreedImagesParams,
  SubBreedImages,
} from 'src/api/getSubBreedImages'
import type { ApiEnvironment } from 'src/lib/api'
import { defaultSubBreedImagesSuccess } from 'src/__tests__/api/getSubBreedImages.test.helpers'
import {
  environmentArbitrary,
  fetchReturnFailure,
  fetchReturnSuccess,
} from 'src/__tests__/lib/api.test.helpers'

describe('generateGetSubBreedImages', (): void => {
  it('generateGetSubBreedImages should produce valid output for valid input', async (): Promise<void> => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fc.record({ breed: fc.string(), subBreed: fc.string() }),
        environmentArbitrary(
          async (): Promise<Response> => {
            const response: Response = await fetchReturnSuccess(
              defaultSubBreedImagesSuccess,
            )

            return response
          },
        ),
        async (
          params: GenerateGetSubBreedImagesParams,
          r: ApiEnvironment,
        ): Promise<boolean> => {
          const response: SubBreedImages = await generateGetSubBreedImages(
            params,
          )(r)()

          const isValid: boolean = fp.either.isRight(response)

          expect(isValid).toBeTrue()

          return isValid
        },
      ),
    )
  })

  it('generateGetSubBreedImages should produce invalid output for invalid input', async (): Promise<void> => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fc.record({ breed: fc.string(), subBreed: fc.string() }),
        environmentArbitrary(
          async (): Promise<Response> => {
            const response: Response = await fetchReturnFailure('failure')

            return response
          },
        ),
        async (
          params: GenerateGetSubBreedImagesParams,
          r: ApiEnvironment,
        ): Promise<boolean> => {
          const response: SubBreedImages = await generateGetSubBreedImages(
            params,
          )(r)()

          const isInvalid: boolean = fp.either.isLeft(response)

          expect(isInvalid).toBeTrue()

          return isInvalid
        },
      ),
    )
  })
})
