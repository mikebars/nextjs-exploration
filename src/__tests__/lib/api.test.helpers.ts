import * as fc from 'fast-check'
import * as io from 'io-ts'

import {
  ApiCall,
  ApiCallTaskEitherReturn,
  ApiEnvironment,
  Fetch,
  FetchParameters,
  FetchReturn,
} from 'src/lib/api'
import { Errors } from 'src/lib/errors'

export const validationErrorsArbitrary: () => fc.Arbitrary<
  Array<io.ValidationError>
> = () =>
  fc.array(
    fc.record({
      context: fc.array(
        fc.record({
          actual: fc.oneof(fc.anything(), fc.constant(undefined)),
          key: fc.string(),
          type: fc.constant(io.unknown),
        }),
      ),
      message: fc.oneof(fc.string(), fc.constant(undefined)),
      value: fc.anything(),
    }),
  )

export const fetchParamsArbitrary: () => fc.Arbitrary<FetchParameters> = () =>
  fc.tuple(fc.string(), fc.constant(undefined))

export const environmentArbitrary: (
  fetch: Fetch,
) => fc.Arbitrary<ApiEnvironment> = (fetch) =>
  fc.constant({
    fetch,
  })

export const fetchReturnSuccess: (success: unknown) => FetchReturn = async (
  success,
) => Promise.resolve({ json: () => Promise.resolve(success) }) as FetchReturn

export const fetchReturnFailure: (failure: unknown) => FetchReturn = (
  failure,
) => Promise.reject<Response>(failure)

export const apiCallArbitrary: <E extends Errors, A>(
  callReturn: ApiCallTaskEitherReturn<E, A>,
) => fc.Arbitrary<ApiCall<ApiEnvironment, E, A>> = (callReturn) =>
  fc.func(fc.func(fc.constant(callReturn)))
