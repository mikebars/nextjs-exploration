import * as fc from 'fast-check'
import * as fp from 'fp-ts'
import * as io from 'io-ts'

import {
  decodeApiCall,
  generateApiCall,
  mapValidationErrorToError,
} from 'src/lib/api'
import { Errors } from 'src/lib/errors'
import {
  apiCallArbitrary,
  environmentArbitrary,
  fetchParamsArbitrary,
  fetchReturnFailure,
  fetchReturnSuccess,
  validationErrorsArbitrary,
} from 'src/__tests__/lib/api.test.helpers'

describe('mapValidationErrorToError', () => {
  it('mapValidationErrorToError should produce output of equal length to input', () => {
    expect.hasAssertions()

    fc.assert(
      fc.property(validationErrorsArbitrary(), (validationErrors) => {
        const errors = mapValidationErrorToError(validationErrors)

        const isSameLength = errors.length === validationErrors.length

        expect(isSameLength).toBe(true)

        return isSameLength
      }),
    )
  })
})

describe('generateApiCall', () => {
  it('generateApiCall should produce valid output from valid input', async () => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fetchParamsArbitrary(),
        environmentArbitrary(() => fetchReturnSuccess('success')),
        async (input, r) => {
          const response = await generateApiCall(...input)(r)()

          const isValid = fp.either.isRight(response)

          expect(isValid).toBe(true)

          return isValid
        },
      ),
    )
  })

  it('generateApiCall should produce invalid output from invalid input', async () => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fetchParamsArbitrary(),
        environmentArbitrary(() => fetchReturnFailure('failure')),
        async (input, r) => {
          const response = await generateApiCall(...input)(r)()

          const isValid = fp.either.isLeft(response)

          expect(isValid).toBe(true)

          return isValid
        },
      ),
    )
  })
})

describe('decodeApiCall', () => {
  it('decodeApiCall should produce valid output from valid input', async () => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fc.constant(io.unknown),
        environmentArbitrary(() => fetchReturnSuccess('success')),
        apiCallArbitrary(Promise.resolve(fp.either.right('success'))),
        async (d, r, apiCall) => {
          const response = await decodeApiCall(d)(apiCall)(r)()

          const isValid = fp.either.isRight(response)

          expect(isValid).toBe(true)

          return isValid
        },
      ),
    )
  })

  it('decodeApiCall should produce invalid output from invalid input', async () => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fc.constant(io.unknown),
        environmentArbitrary(() => fetchReturnFailure('failure')),
        apiCallArbitrary<Errors, unknown>(
          Promise.resolve(fp.either.left([Error('failure')])),
        ),
        async (d, r, apiCall) => {
          const response = await decodeApiCall(d)(apiCall)(r)()

          const isInvalid = fp.either.isLeft(response)

          expect(isInvalid).toBe(true)

          return isInvalid
        },
      ),
    )
  })
})
