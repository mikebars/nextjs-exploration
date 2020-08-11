import * as fc from 'fast-check'
import * as fp from 'fp-ts'
import * as io from 'io-ts'
import type { GetStaticPropsContext } from 'next'
import type { ParsedUrlQuery } from 'querystring'

import {
  GetStaticPropsContextCodec,
  GetStaticPropsDecodedContextCodec,
  ParsedUrlQueryCodec,
} from 'src/lib/next'
import {
  getStaticPropsContextArbitrary,
  parsedUrlQueryArbitrary,
} from 'src/__tests__/lib/next.test.helpers'

describe('parsedUrlQueryCodec', (): void => {
  it('parsedUrlQueryCodec decodes valid data as Right', (): void => {
    expect.hasAssertions()

    fc.assert(
      fc.property(
        parsedUrlQueryArbitrary(),
        (parsedUrlQuery: ParsedUrlQuery): boolean => {
          const decoded: fp.either.Either<
            Array<io.ValidationError>,
            ParsedUrlQuery
          > = ParsedUrlQueryCodec.decode(parsedUrlQuery)

          const isValid: boolean = fp.either.isRight(decoded)

          expect(isValid).toBe(true)

          return isValid
        },
      ),
    )
  })

  it('parsedUrlQueryCodec decodes invalid data as Left', (): void => {
    expect.hasAssertions()

    fc.assert(
      fc.property(
        fc.constant(undefined),
        (parsedUrlQuery: unknown): boolean => {
          const decoded: fp.either.Either<
            Array<io.ValidationError>,
            ParsedUrlQuery
          > = ParsedUrlQueryCodec.decode(parsedUrlQuery)

          const isInvalid: boolean = fp.either.isLeft(decoded)

          expect(isInvalid).toBe(true)

          return isInvalid
        },
      ),
    )
  })
})

describe('getStaticPropsContextCodec', (): void => {
  it('getStaticPropsContextCodec decodes valid data as Right', (): void => {
    expect.hasAssertions()

    fc.assert(
      fc.property(
        getStaticPropsContextArbitrary(),
        (getStaticPropsContext: GetStaticPropsContext): boolean => {
          const decoded: fp.either.Either<
            Array<io.ValidationError>,
            GetStaticPropsContext
          > = GetStaticPropsContextCodec.decode(getStaticPropsContext)

          const isValid: boolean = fp.either.isRight(decoded)

          expect(isValid).toBe(true)

          return isValid
        },
      ),
    )
  })

  it('getStaticPropsContextCodec decodes invalid data as Left', (): void => {
    expect.hasAssertions()

    fc.assert(
      fc.property(
        fc.constant(undefined),
        (getStaticPropsContext: unknown): boolean => {
          const decoded: fp.either.Either<
            Array<io.ValidationError>,
            GetStaticPropsContext
          > = GetStaticPropsContextCodec.decode(getStaticPropsContext)

          const isInvalid: boolean = fp.either.isLeft(decoded)

          expect(isInvalid).toBe(true)

          return isInvalid
        },
      ),
    )
  })
})

describe('getStaticPropsDecodedContextCodec', (): void => {
  it('getStaticPropsDecodedContextCodec decodes valid data as Right', (): void => {
    expect.hasAssertions()

    fc.assert(
      fc.property(
        getStaticPropsContextArbitrary(),
        (getStaticPropsContext: GetStaticPropsContext): boolean => {
          const decoded: fp.either.Either<
            Array<io.ValidationError>,
            GetStaticPropsContext
          > = GetStaticPropsDecodedContextCodec(ParsedUrlQueryCodec).decode(
            getStaticPropsContext,
          )

          const isValid: boolean = fp.either.isRight(decoded)

          expect(isValid).toBe(true)

          return isValid
        },
      ),
    )
  })

  it('getStaticPropsDecodedContextCodec decodes invalid data as Left', (): void => {
    expect.hasAssertions()

    fc.assert(
      fc.property(
        fc.constant(undefined),
        (getStaticPropsContext: unknown): boolean => {
          const decoded: fp.either.Either<
            Array<io.ValidationError>,
            GetStaticPropsContext
          > = GetStaticPropsDecodedContextCodec(ParsedUrlQueryCodec).decode(
            getStaticPropsContext,
          )

          const isInvalid: boolean = fp.either.isLeft(decoded)

          expect(isInvalid).toBe(true)

          return isInvalid
        },
      ),
    )
  })
})
