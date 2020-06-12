import * as fc from 'fast-check'
import type { GetStaticPropsContext } from 'next'
import type { ParsedUrlQuery } from 'querystring'

export const parsedUrlQueryArbitrary: () => fc.Arbitrary<ParsedUrlQuery> = () =>
  fc.dictionary(
    fc.string(),
    fc.oneof(fc.string(), fc.array(fc.string()), fc.constant(undefined)),
  )

export const getStaticPropsContextArbitrary: (
  parsedUrlQueryArb?: fc.Arbitrary<ParsedUrlQuery>,
) => fc.Arbitrary<GetStaticPropsContext> = (
  parsedUrlQueryArb = parsedUrlQueryArbitrary(),
) =>
  fc.record({
    params: parsedUrlQueryArb,
    preview: fc.oneof(fc.boolean(), fc.constant(undefined)),
    previewData: fc.anything(),
  })
