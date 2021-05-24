import * as fc from 'fast-check'
/* eslint-disable-next-line unicorn/prefer-node-protocol */
import type { ParsedUrlQuery as qs_ParsedUrlQuery } from 'querystring'

import type { GetStaticPropsDecodedContext } from 'src/lib/next'

export type ParsedUrlQueryArbitrary = () => fc.Arbitrary<qs_ParsedUrlQuery>

export const parsedUrlQueryArbitrary: ParsedUrlQueryArbitrary =
  (): fc.Arbitrary<qs_ParsedUrlQuery> =>
    fc.dictionary(
      fc.string(),
      fc.oneof(fc.string(), fc.array(fc.string()), fc.constant(undefined)),
    )

export type GetStaticPropsContextArbitrary = <Query extends qs_ParsedUrlQuery>(
  parsedUrlQueryArb?: fc.Arbitrary<Query>,
) => fc.Arbitrary<GetStaticPropsDecodedContext<Query>>

export const getStaticPropsContextArbitrary: GetStaticPropsContextArbitrary = <
  Query extends qs_ParsedUrlQuery,
>(
  parsedUrlQueryArb: fc.Arbitrary<Query> = parsedUrlQueryArbitrary() as fc.Arbitrary<Query>,
): fc.Arbitrary<GetStaticPropsDecodedContext<Query>> =>
  fc.record({
    params: parsedUrlQueryArb,
    preview: fc.oneof(fc.boolean(), fc.constant(undefined)),
    previewData: fc.oneof(
      fc.object(),
      fc.string(),
      fc.constant(false as const),
      fc.constant(undefined),
    ),
  })
