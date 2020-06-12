import * as io from 'io-ts'
import type { GetStaticPaths, GetStaticPropsContext } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import type { PromiseType } from 'utility-types'

export type Paths = PromiseType<ReturnType<GetStaticPaths>>['paths']

export const ParsedUrlQueryCodec: io.Type<ParsedUrlQuery> = io.record(
  io.string,
  io.union([io.string, io.array(io.string), io.undefined]),
)

export const GetStaticPropsContextCodec: io.Type<GetStaticPropsContext> = io.partial(
  {
    params: ParsedUrlQueryCodec,
    preview: io.union([io.boolean, io.undefined]),
    previewData: io.unknown,
  },
)
