import * as fc from 'fast-check'
import * as fp from 'fp-ts'
import type { ValidationError as io_ValidationError } from 'io-ts'
import type { GetStaticPropsContext as Next_GetStaticPropsContext } from 'next'
/* eslint-disable-next-line unicorn/prefer-node-protocol */
import type { ParsedUrlQuery as qs_ParsedUrlQuery } from 'querystring'

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
        (parsedUrlQuery: qs_ParsedUrlQuery): boolean => {
          const decoded: fp.either.Either<
            Array<io_ValidationError>,
            qs_ParsedUrlQuery
          > = ParsedUrlQueryCodec.decode(parsedUrlQuery)

          const isValid: boolean = fp.either.isRight(decoded)

          expect(isValid).toBeTrue()

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
            Array<io_ValidationError>,
            qs_ParsedUrlQuery
          > = ParsedUrlQueryCodec.decode(parsedUrlQuery)

          const isInvalid: boolean = fp.either.isLeft(decoded)

          expect(isInvalid).toBeTrue()

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
        (getStaticPropsContext: Next_GetStaticPropsContext): boolean => {
          const decoded: fp.either.Either<
            Array<io_ValidationError>,
            Next_GetStaticPropsContext
          > = GetStaticPropsContextCodec.decode(getStaticPropsContext)

          const isValid: boolean = fp.either.isRight(decoded)

          expect(isValid).toBeTrue()

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
            Array<io_ValidationError>,
            Next_GetStaticPropsContext
          > = GetStaticPropsContextCodec.decode(getStaticPropsContext)

          const isInvalid: boolean = fp.either.isLeft(decoded)

          expect(isInvalid).toBeTrue()

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
        (getStaticPropsContext: Next_GetStaticPropsContext): boolean => {
          const decoded: fp.either.Either<
            Array<io_ValidationError>,
            Next_GetStaticPropsContext
          > = GetStaticPropsDecodedContextCodec(ParsedUrlQueryCodec).decode(
            getStaticPropsContext,
          )

          const isValid: boolean = fp.either.isRight(decoded)

          expect(isValid).toBeTrue()

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
            Array<io_ValidationError>,
            Next_GetStaticPropsContext
          > = GetStaticPropsDecodedContextCodec(ParsedUrlQueryCodec).decode(
            getStaticPropsContext,
          )

          const isInvalid: boolean = fp.either.isLeft(decoded)

          expect(isInvalid).toBeTrue()

          return isInvalid
        },
      ),
    )
  })
})
