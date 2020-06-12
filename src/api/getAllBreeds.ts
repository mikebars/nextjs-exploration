import * as fp from 'fp-ts'
import * as io from 'io-ts'

import {
  decodeApiCall,
  generateApiCall,
  RefineApiCallEitherValue,
  RefineApiCallValue,
} from 'src/lib/api'

export type AllBreedsSuccess = {
  message: Record<string, Array<string>>
  status: 'success'
}

const AllBreedsSuccessCodec: io.Type<AllBreedsSuccess> = io.type({
  message: io.record(io.string, io.array(io.string)),
  status: io.literal('success'),
})

export type AllBreeds = RefineApiCallEitherValue<AllBreedsSuccess>

export const getAllBreeds: RefineApiCallValue<AllBreedsSuccess> = fp.pipeable.pipe(
  generateApiCall('https://dog.ceo/api/breeds/list/all'),
  decodeApiCall(AllBreedsSuccessCodec),
)
