import * as fp from 'fp-ts'
import * as io from 'io-ts'

import {
  decodeApiCall,
  generateApiCall,
  RefineApiCallEitherValue,
  RefineApiCallValue,
} from 'src/lib/api'

export type SubBreedImagesSuccess = {
  message: Array<string>
  status: 'success'
}

const SubBreedImagesSuccessCodec: io.Type<SubBreedImagesSuccess> = io.type({
  message: io.array(io.string),
  status: io.literal('success'),
})

export type SubBreedImages = RefineApiCallEitherValue<SubBreedImagesSuccess>

export type GetSubBreedImages = RefineApiCallValue<SubBreedImagesSuccess>

export const generateGetSubBreedImages: (params: {
  breed: string
  subBreed: string
}) => RefineApiCallValue<SubBreedImagesSuccess> = (params) =>
  fp.pipeable.pipe(
    generateApiCall(
      ` https://dog.ceo/api/breed/${params.breed}/${params.subBreed}/images`,
    ),
    decodeApiCall(SubBreedImagesSuccessCodec),
  )
