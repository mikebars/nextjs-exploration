import * as fc from 'fast-check'
import * as fp from 'fp-ts'

import { AllBreeds, getAllBreeds } from 'src/api/getAllBreeds'
import type { ApiEnvironment } from 'src/lib/api'
import { defaultAllBreedsSuccess } from 'src/__tests__/api/getAllBreeds.test.helpers'
import {
  environmentArbitrary,
  fetchReturnFailure,
  fetchReturnSuccess,
} from 'src/__tests__/lib/api.test.helpers'

describe('getAllBreeds', (): void => {
  it('getAllBreeds should produce valid output for valid input', async (): Promise<void> => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        environmentArbitrary(
          async (): Promise<Response> => {
            const response: Response = await fetchReturnSuccess(
              defaultAllBreedsSuccess,
            )

            return response
          },
        ),
        async (r: ApiEnvironment): Promise<boolean> => {
          const response: AllBreeds = await getAllBreeds(r)()

          const isValid: boolean = fp.either.isRight(response)

          expect(isValid).toBeTrue()

          return isValid
        },
      ),
    )
  })

  it('getAllBreeds should produce invalid output for invalid input', async (): Promise<void> => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        environmentArbitrary(
          async (): Promise<Response> => {
            const response: Response = await fetchReturnFailure('failure')

            return response
          },
        ),
        async (r: ApiEnvironment): Promise<boolean> => {
          const response: AllBreeds = await getAllBreeds(r)()

          const isInvalid: boolean = fp.either.isLeft(response)

          expect(isInvalid).toBeTrue()

          return isInvalid
        },
      ),
    )
  })
})
