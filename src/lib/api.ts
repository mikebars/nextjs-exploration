import * as fp from 'fp-ts'
import * as io from 'io-ts'
import { failure } from 'io-ts/lib/PathReporter'

import { Errors, errorsOf } from 'src/lib/errors'

export type Fetch = typeof fetch

export type FetchParameters = Parameters<Fetch>

export type FetchReturn = ReturnType<Fetch>

export type ApiEnvironment = {
  fetch: typeof fetch
}

export type ApiError = Errors

export type ApiValue = unknown

export type ApiCall<
  R extends ApiEnvironment = ApiEnvironment,
  E extends ApiError = ApiError,
  A extends ApiValue = ApiValue
> = fp.readerTaskEither.ReaderTaskEither<R, E, A>

export type ApiCallReturn<
  R extends ApiEnvironment = ApiEnvironment,
  E extends ApiError = ApiError,
  A extends ApiValue = ApiValue
> = ReturnType<ApiCall<R, E, A>>

export type ApiCallTaskEither<
  E extends ApiError = ApiError,
  A extends ApiValue = ApiValue
> = fp.taskEither.TaskEither<E, A>

export type ApiCallTaskEitherReturn<
  E extends ApiError = ApiError,
  A extends ApiValue = ApiValue
> = ReturnType<ApiCallTaskEither<E, A>>

export type ApiCallEither<
  E extends ApiError = ApiError,
  A extends ApiValue = ApiValue
> = fp.either.Either<E, A>

export type RefineApiCallEnvironment<
  R extends ApiEnvironment = ApiEnvironment
> = ApiCall<R>

export type RefineApiCallError<E extends ApiError = ApiError> = ApiCall<
  ApiEnvironment,
  E
>

export type RefineApiCallValue<A extends ApiValue = ApiValue> = ApiCall<
  ApiEnvironment,
  ApiError,
  A
>

export type RefineApiCallTaskEitherError<
  E extends ApiError = ApiError
> = ApiCallTaskEither<E>

export type RefineApiCallTaskEitherValue<
  A extends ApiValue = ApiValue
> = ApiCallTaskEither<ApiError, A>

export type RefineApiCallEitherError<
  E extends ApiError = ApiError
> = ApiCallEither<E>

export type RefineApiCallEitherValue<
  A extends ApiValue = ApiValue
> = ApiCallEither<ApiError, A>

export const mapValidationErrorToError: (
  es: Array<io.ValidationError>,
) => Errors = fp.function.flow(failure, fp.array.map(Error))

export const generateApiCall: (
  ...params: Parameters<typeof fetch>
) => ApiCall = (...fetchParams) => (r) =>
  fp.taskEither.tryCatch(async () => {
    const response = await r.fetch(...fetchParams)

    return response.json()
  }, errorsOf)

export const decodeApiCall = <A>(d: io.Decoder<unknown, A>) => (
  apiCall: ApiCall,
): RefineApiCallValue<A> =>
  fp.pipeable.pipe(
    apiCall,
    fp.readerTaskEither.chain((json) =>
      fp.readerTaskEither.fromEither(
        fp.pipeable.pipe(
          d.decode(json),
          fp.either.mapLeft(mapValidationErrorToError),
        ),
      ),
    ),
  )
