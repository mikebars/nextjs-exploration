import * as fc from 'fast-check'
import * as fp from 'fp-ts'

import { GetStaticPropsContextCodec, ParsedUrlQueryCodec } from 'src/lib/next'
import {
  getStaticPropsContextArbitrary,
  parsedUrlQueryArbitrary,
} from 'src/__tests__/lib/next.test.helpers'

describe('parsedUrlQueryCodec', () => {
  it('parsedUrlQueryCodec decodes valid data as Right', () => {
    expect.hasAssertions()

    fc.assert(
      fc.property(parsedUrlQueryArbitrary(), (parsedUrlQuery) => {
        const decoded = ParsedUrlQueryCodec.decode(parsedUrlQuery)

        const isValid = fp.either.isRight(decoded)

        expect(isValid).toBe(true)

        return isValid
      }),
    )
  })

  it('parsedUrlQueryCodec decodes invalid data as Left', () => {
    expect.hasAssertions()

    fc.assert(
      fc.property(fc.constant(undefined), (parsedUrlQuery) => {
        const decoded = ParsedUrlQueryCodec.decode(parsedUrlQuery)

        const isInvalid = fp.either.isLeft(decoded)

        expect(isInvalid).toBe(true)

        return isInvalid
      }),
    )
  })
})

describe('getStaticPropsContextCodec', () => {
  it('getStaticPropsContextCodec decodes valid data as Right', () => {
    expect.hasAssertions()

    fc.assert(
      fc.property(getStaticPropsContextArbitrary(), (getStaticPropsContext) => {
        const decoded = GetStaticPropsContextCodec.decode(getStaticPropsContext)

        const isValid = fp.either.isRight(decoded)

        expect(isValid).toBe(true)

        return isValid
      }),
    )
  })

  it('getStaticPropsContextCodec decodes invalid data as Left', () => {
    expect.hasAssertions()

    fc.assert(
      fc.property(fc.constant(undefined), (getStaticPropsContext) => {
        const decoded = GetStaticPropsContextCodec.decode(getStaticPropsContext)

        const isInvalid = fp.either.isLeft(decoded)

        expect(isInvalid).toBe(true)

        return isInvalid
      }),
    )
  })
})
