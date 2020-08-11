import * as fp from 'fp-ts'
import * as io from 'io-ts'

import { ApiEnvironment, decodeApiCall, generateApiCall } from 'src/lib/api'

export type AllBreedsSuccess = {
  message: Record<string, Array<string>>
  status: 'success'
}

export const AllBreedsSuccessCodec: io.Type<AllBreedsSuccess> = io.type({
  message: io.record(io.string, io.array(io.string)),
  status: io.literal('success'),
})

export type AllBreeds = fp.either.Either<Array<Error>, AllBreedsSuccess>

export type GetAllBreeds = fp.readerTaskEither.ReaderTaskEither<
  ApiEnvironment,
  Array<Error>,
  AllBreedsSuccess
>

export const getAllBreeds: GetAllBreeds = fp.pipeable.pipe(
  generateApiCall('https://dog.ceo/api/breeds/list/all'),
  decodeApiCall(AllBreedsSuccessCodec),
)
