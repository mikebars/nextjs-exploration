import * as fp from 'fp-ts'
import * as io from 'io-ts'

import { ApiEnvironment, decodeApiCall, generateApiCall } from 'src/lib/api'

export type BreedImagesSuccess = {
  message: Array<string>
  status: 'success'
}

export const BreedImagesSuccessCodec: io.Type<BreedImagesSuccess> = io.type({
  message: io.array(io.string),
  status: io.literal('success'),
})

export type BreedImages = fp.either.Either<Array<Error>, BreedImagesSuccess>

export type GetBreedImages = fp.readerTaskEither.ReaderTaskEither<
  ApiEnvironment,
  Array<Error>,
  BreedImagesSuccess
>

export type GenerateGetBreedImagesParams = {
  breed: string
}

export type GenerateGetBreedImages = (
  params: GenerateGetBreedImagesParams,
) => GetBreedImages

export const generateGetBreedImages: GenerateGetBreedImages = (
  params: GenerateGetBreedImagesParams,
): GetBreedImages =>
  fp.function.pipe(
    generateApiCall(`https://dog.ceo/api/breed/${params.breed}/images`),
    decodeApiCall(BreedImagesSuccessCodec),
  )
