import * as fc from 'fast-check'
import * as fp from 'fp-ts'
import * as io from 'io-ts'

import {
  ApiEnvironment,
  decodeApiCall,
  FetchParameters,
  generateApiCall,
  mapValidationErrorToError,
} from 'src/lib/api'
import {
  apiCallArbitrary,
  environmentArbitrary,
  fetchParamsArbitrary,
  fetchReturnFailure,
  fetchReturnSuccess,
  validationErrorsArbitrary,
} from 'src/__tests__/lib/api.test.helpers'

const fetchReturnSuccessAsync: () => Promise<Response> = async (): Promise<Response> => {
  const response: Response = await fetchReturnSuccess('success')

  return response
}

const fetchReturnFailureAsync: () => Promise<Response> = async (): Promise<Response> => {
  const response: Response = await fetchReturnFailure('failure')

  return response
}

describe('mapValidationErrorToError', (): void => {
  it('mapValidationErrorToError should produce output of equal length to input', (): void => {
    expect.hasAssertions()

    fc.assert(
      fc.property(
        validationErrorsArbitrary(),
        (validationErrors: Array<io.ValidationError>): boolean => {
          const errors: Array<Error> = mapValidationErrorToError(
            validationErrors,
          )

          const isSameLength: boolean =
            errors.length === validationErrors.length

          expect(isSameLength).toBeTrue()

          return isSameLength
        },
      ),
    )
  })
})

describe('generateApiCall', (): void => {
  it('generateApiCall should produce valid output from valid input', async (): Promise<void> => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fetchParamsArbitrary(),
        environmentArbitrary(fetchReturnSuccessAsync),
        async (input: FetchParameters, r: ApiEnvironment): Promise<boolean> => {
          const response: fp.either.Either<
            Array<Error>,
            unknown
          > = await generateApiCall(...input)(r)()

          const isValid: boolean = fp.either.isRight(response)

          expect(isValid).toBeTrue()

          return isValid
        },
      ),
    )
  })

  it('generateApiCall should produce invalid output from invalid input', async (): Promise<void> => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fetchParamsArbitrary(),
        environmentArbitrary(fetchReturnFailureAsync),
        async (input: FetchParameters, r: ApiEnvironment): Promise<boolean> => {
          const response: fp.either.Either<
            Array<Error>,
            unknown
          > = await generateApiCall(...input)(r)()

          const isValid: boolean = fp.either.isLeft(response)

          expect(isValid).toBeTrue()

          return isValid
        },
      ),
    )
  })
})

describe('decodeApiCall', (): void => {
  it('decodeApiCall should produce valid output from valid input', async (): Promise<void> => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fc.constant(io.unknown),
        environmentArbitrary(fetchReturnSuccessAsync),
        apiCallArbitrary(Promise.resolve(fp.either.right('success'))),
        async (
          d: io.UnknownC,
          r: ApiEnvironment,
          apiCall: fp.readerTaskEither.ReaderTaskEither<
            ApiEnvironment,
            Array<Error>,
            unknown
          >,
        ): Promise<boolean> => {
          const response: fp.either.Either<
            Array<Error>,
            unknown
          > = await decodeApiCall(d)(apiCall)(r)()

          const isValid: boolean = fp.either.isRight(response)

          expect(isValid).toBeTrue()

          return isValid
        },
      ),
    )
  })

  it('decodeApiCall should produce invalid output from invalid input', async (): Promise<void> => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        fc.constant(io.unknown),
        environmentArbitrary(fetchReturnFailureAsync),
        apiCallArbitrary(
          Promise.resolve(fp.either.left([new Error('failure')])),
        ),
        async (
          d: io.UnknownC,
          r: ApiEnvironment,
          apiCall: fp.readerTaskEither.ReaderTaskEither<
            ApiEnvironment,
            Array<Error>,
            unknown
          >,
        ): Promise<boolean> => {
          const response: fp.either.Either<
            Array<Error>,
            unknown
          > = await decodeApiCall(d)(apiCall)(r)()

          const isInvalid: boolean = fp.either.isLeft(response)

          expect(isInvalid).toBeTrue()

          return isInvalid
        },
      ),
    )
  })
})
