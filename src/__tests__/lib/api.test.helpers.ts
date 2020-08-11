import * as fc from 'fast-check'
import * as fp from 'fp-ts'
import * as io from 'io-ts'

import type { ApiEnvironment, Fetch, FetchParameters } from 'src/lib/api'

export type ValidationErrorsArbitrary = () => fc.Arbitrary<
  Array<io.ValidationError>
>

export const validationErrorsArbitrary: ValidationErrorsArbitrary = (): fc.Arbitrary<
  Array<io.ValidationError>
> =>
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

export type FetchParamsArbitrary = () => fc.Arbitrary<FetchParameters>

export const fetchParamsArbitrary: FetchParamsArbitrary = (): fc.Arbitrary<
  FetchParameters
> => fc.tuple(fc.string(), fc.constant(undefined))

export type EnvironmentArbitrary = <R extends ApiEnvironment>(
  fetch: Fetch,
) => fc.Arbitrary<R>

export const environmentArbitrary: EnvironmentArbitrary = <
  R extends ApiEnvironment
>(
  fetch: Fetch,
): fc.Arbitrary<R> => {
  const envLike: unknown = {
    fetch,
  }

  const r: R = envLike as R

  return fc.constant(r)
}

export type FetchReturnSuccess = <A>(success: A) => Promise<Response>

export const fetchReturnSuccess: FetchReturnSuccess = async <A>(
  success: A,
): Promise<Response> => {
  const responseLike: Pick<Response, 'json'> = {
    json: (): Promise<A> => Promise.resolve(success),
  }

  const response: Response = responseLike as Response

  return Promise.resolve(response)
}

export type FetchReturnFailure = <A>(failure: A) => Promise<Response>

export const fetchReturnFailure: FetchReturnFailure = <A>(
  failure: A,
): Promise<Response> => Promise.reject<Response>(failure)

export type ApiCallArbitrary = <
  R extends ApiEnvironment,
  E extends Array<Error>,
  A
>(
  callReturn: Promise<fp.either.Either<E, A>>,
) => fc.Arbitrary<fp.readerTaskEither.ReaderTaskEither<R, E, A>>

export const apiCallArbitrary: ApiCallArbitrary = <
  R extends ApiEnvironment,
  E extends Array<Error>,
  A
>(
  callReturn: Promise<fp.either.Either<E, A>>,
): fc.Arbitrary<fp.readerTaskEither.ReaderTaskEither<R, E, A>> =>
  fc.func(fc.func(fc.constant(callReturn)))
