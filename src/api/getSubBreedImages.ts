import * as fp from 'fp-ts'
import * as io from 'io-ts'

import { ApiEnvironment, decodeApiCall, generateApiCall } from 'src/lib/api'

export type SubBreedImagesSuccess = {
  message: Array<string>
  status: 'success'
}

export const SubBreedImagesSuccessCodec: io.Type<SubBreedImagesSuccess> = io.type(
  {
    message: io.array(io.string),
    status: io.literal('success'),
  },
)

export type SubBreedImages = fp.either.Either<
  Array<Error>,
  SubBreedImagesSuccess
>

export type GetSubBreedImages = fp.readerTaskEither.ReaderTaskEither<
  ApiEnvironment,
  Array<Error>,
  SubBreedImagesSuccess
>

export type GenerateGetSubBreedImagesParams = {
  breed: string
  subBreed: string
}

export type GenerateGetSubBreedImages = (
  params: GenerateGetSubBreedImagesParams,
) => GetSubBreedImages

export const generateGetSubBreedImages: GenerateGetSubBreedImages = (
  params: GenerateGetSubBreedImagesParams,
): GetSubBreedImages =>
  fp.pipeable.pipe(
    generateApiCall(
      ` https://dog.ceo/api/breed/${params.breed}/${params.subBreed}/images`,
    ),
    decodeApiCall(SubBreedImagesSuccessCodec),
  )
