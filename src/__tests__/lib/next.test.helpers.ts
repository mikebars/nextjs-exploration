import * as fc from 'fast-check'
import type { ParsedUrlQuery } from 'querystring'

import type { GetStaticPropsDecodedContext } from 'src/lib/next'

export type ParsedUrlQueryArbitrary = () => fc.Arbitrary<ParsedUrlQuery>

export const parsedUrlQueryArbitrary: ParsedUrlQueryArbitrary = (): fc.Arbitrary<
  ParsedUrlQuery
> =>
  fc.dictionary(
    fc.string(),
    fc.oneof(fc.string(), fc.array(fc.string()), fc.constant(undefined)),
  )

export type GetStaticPropsContextArbitrary = <Query extends ParsedUrlQuery>(
  parsedUrlQueryArb?: fc.Arbitrary<Query>,
) => fc.Arbitrary<GetStaticPropsDecodedContext<Query>>

export const getStaticPropsContextArbitrary: GetStaticPropsContextArbitrary = <
  Query extends ParsedUrlQuery
>(
  parsedUrlQueryArb: fc.Arbitrary<
    Query
  > = parsedUrlQueryArbitrary() as fc.Arbitrary<Query>,
): fc.Arbitrary<GetStaticPropsDecodedContext<Query>> =>
  fc.record({
    params: parsedUrlQueryArb,
    preview: fc.oneof(fc.boolean(), fc.constant(undefined)),
    previewData: fc.anything(),
  })
