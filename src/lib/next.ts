import * as io from 'io-ts'
import type {
  GetStaticPaths as Next_GetStaticPaths,
  GetStaticPropsContext as Next_GetStaticPropsContext,
} from 'next'
import type { ParsedUrlQuery as qs_ParsedUrlQuery } from 'querystring'
import type { Any as tstb_Any, Object as tstb_Object } from 'ts-toolbelt'

export type GetStaticPathsResult<
  Query extends qs_ParsedUrlQuery
> = tstb_Any.PromiseType<ReturnType<Next_GetStaticPaths<Query>>>

export type GetStaticPathsReturn<Query extends qs_ParsedUrlQuery> = Promise<
  GetStaticPathsResult<Query>
>

export type Paths<
  Query extends qs_ParsedUrlQuery
> = GetStaticPathsResult<Query>['paths']

export type Path<Query extends qs_ParsedUrlQuery> = Paths<Query>[number]

export const ParsedUrlQueryCodec: io.Type<qs_ParsedUrlQuery> = io.record(
  io.string,
  io.union([io.string, io.array(io.string), io.undefined]),
)

/* eslint-disable-next-line @typescript-eslint/no-redeclare */
export type ParsedUrlQueryCodec = typeof ParsedUrlQueryCodec

export const GetStaticPropsContextCodec: io.Type<Next_GetStaticPropsContext> = io.partial(
  {
    params: ParsedUrlQueryCodec,
    preview: io.union([io.boolean, io.undefined]),
    previewData: io.unknown,
  },
)

export type GetStaticPropsDecodedContext<
  Query extends qs_ParsedUrlQuery,
  Context extends Next_GetStaticPropsContext<Query> = Next_GetStaticPropsContext<Query>
> = tstb_Object.Required<Context, 'params'>

export type GetStaticPropsDecodedContextCodec = <
  Query extends qs_ParsedUrlQuery
>(
  queryC: io.Type<Query>,
) => io.Type<GetStaticPropsDecodedContext<Query>>

/* eslint-disable-next-line @typescript-eslint/no-redeclare */
export const GetStaticPropsDecodedContextCodec: GetStaticPropsDecodedContextCodec = <
  Query extends qs_ParsedUrlQuery
>(
  queryC: io.Type<Query>,
): io.Type<GetStaticPropsDecodedContext<Query>> =>
  io.intersection([
    GetStaticPropsContextCodec,
    io.type({
      params: queryC,
    }),
  ])
