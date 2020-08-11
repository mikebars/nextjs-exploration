import * as io from 'io-ts'
import type { GetStaticPaths, GetStaticPropsContext } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import * as ut from 'utility-types'

export type GetStaticPathsResult<Query extends ParsedUrlQuery> = ut.PromiseType<
  ReturnType<GetStaticPaths<Query>>
>

export type GetStaticPathsReturn<Query extends ParsedUrlQuery> = Promise<
  GetStaticPathsResult<Query>
>

export type Paths<Query extends ParsedUrlQuery> = GetStaticPathsResult<
  Query
>['paths']

export type Path<Query extends ParsedUrlQuery> = Paths<Query>[number]

export const ParsedUrlQueryCodec: io.Type<ParsedUrlQuery> = io.record(
  io.string,
  io.union([io.string, io.array(io.string), io.undefined]),
)

export type ParsedUrlQueryCodec = typeof ParsedUrlQueryCodec

export const GetStaticPropsContextCodec: io.Type<GetStaticPropsContext> = io.partial(
  {
    params: ParsedUrlQueryCodec,
    preview: io.union([io.boolean, io.undefined]),
    previewData: io.unknown,
  },
)

export type GetStaticPropsDecodedContext<
  Query extends ParsedUrlQuery,
  Context extends GetStaticPropsContext<Query> = GetStaticPropsContext<Query>
> = ut.Required<Context, 'params'>

export type GetStaticPropsDecodedContextCodec = <Query extends ParsedUrlQuery>(
  queryC: io.Type<Query>,
) => io.Type<GetStaticPropsDecodedContext<Query>>

export const GetStaticPropsDecodedContextCodec: GetStaticPropsDecodedContextCodec = <
  Query extends ParsedUrlQuery
>(
  queryC: io.Type<Query>,
): io.Type<GetStaticPropsDecodedContext<Query>> =>
  io.intersection([
    GetStaticPropsContextCodec,
    io.type({
      params: queryC,
    }),
  ])
