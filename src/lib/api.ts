import * as fp from 'fp-ts'
import * as io from 'io-ts'
import { failure } from 'io-ts/lib/PathReporter'

import { errorsMap, errorsOf } from 'src/lib/errors'

export type Fetch = typeof fetch

export type FetchParameters = Parameters<Fetch>

export type ApiEnvironment = {
  fetch: Fetch
}

export type MapValidationErrorToError = <E extends Array<Error>>(
  ve: Array<io.ValidationError>,
) => E

export const mapValidationErrorToError: MapValidationErrorToError = <
  E extends Array<Error>
>(
  ve: Array<io.ValidationError>,
): E => fp.pipeable.pipe(ve, failure, (b: Array<string>): E => errorsMap(b)) // tslint:disable-line:no-unnecessary-callback-wrapper

export type GenerateApiCall = <
  R extends ApiEnvironment,
  E extends Array<Error>,
  A
>(
  ...params: FetchParameters
) => fp.readerTaskEither.ReaderTaskEither<R, E, A>

export const generateApiCall: GenerateApiCall = <
  R extends ApiEnvironment,
  E extends Array<Error>,
  A
>(
  ...fetchParams: FetchParameters
): fp.readerTaskEither.ReaderTaskEither<R, E, A> => (
  r: R,
): fp.taskEither.TaskEither<E, A> =>
  fp.pipeable.pipe(
    fp.taskEither.tryCatch(async (): Promise<A> => {
      const response: Response = await r.fetch(...fetchParams)

      return response.json()
    }, fp.function.identity),
    fp.taskEither.mapLeft<unknown, E>(errorsOf),
  )

export type DecodeApiCallReturn<A, I = unknown> = <
  R extends ApiEnvironment,
  E extends Array<Error>
>(
  apiCall: fp.readerTaskEither.ReaderTaskEither<R, E, I>,
) => fp.readerTaskEither.ReaderTaskEither<R, E, A>

export type DecodeApiCall = <A, I = unknown>(
  d: io.Decoder<I, A>,
) => <R extends ApiEnvironment, E extends Array<Error>>(
  apiCall: fp.readerTaskEither.ReaderTaskEither<R, E, I>,
) => fp.readerTaskEither.ReaderTaskEither<R, E, A>

export const decodeApiCall: DecodeApiCall = <A, I = unknown>(
  d: io.Decoder<I, A>,
): DecodeApiCallReturn<A, I> => <
  R extends ApiEnvironment,
  E extends Array<Error>
>(
  apiCall: fp.readerTaskEither.ReaderTaskEither<R, E, I>,
): fp.readerTaskEither.ReaderTaskEither<R, E, A> =>
  fp.pipeable.pipe(
    apiCall,
    fp.readerTaskEither.chain(
      (json: I): fp.readerTaskEither.ReaderTaskEither<R, E, A> =>
        fp.readerTaskEither.fromEither(
          fp.pipeable.pipe(
            d.decode(json),
            fp.either.mapLeft<Array<io.ValidationError>, E>(
              mapValidationErrorToError,
            ),
          ),
        ),
    ),
  )
