import * as fp from 'fp-ts'
import * as io from 'io-ts'

import {
  decodeApiCall,
  generateApiCall,
  RefineApiCallEitherValue,
  RefineApiCallValue,
} from 'src/lib/api'

export type BreedImagesSuccess = {
  message: Array<string>
  status: 'success'
}

const BreedImagesSuccessCodec: io.Type<BreedImagesSuccess> = io.type({
  message: io.array(io.string),
  status: io.literal('success'),
})

export type BreedImages = RefineApiCallEitherValue<BreedImagesSuccess>

export type GetBreedImages = RefineApiCallValue<BreedImagesSuccess>

export const generateGetBreedImages: (params: {
  breed: string
}) => GetBreedImages = (params) =>
  fp.pipeable.pipe(
    generateApiCall(`https://dog.ceo/api/breed/${params.breed}/images`),
    decodeApiCall(BreedImagesSuccessCodec),
  )
