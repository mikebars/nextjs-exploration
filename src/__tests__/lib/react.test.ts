import * as fc from 'fast-check'

import { concatClassName } from 'src/lib/react'

describe('concatClassName', (): void => {
  it('concatClassName output is defaultClassName when className is undefined', (): void => {
    expect.hasAssertions()

    fc.assert(
      fc.property(
        fc.constant(undefined),
        fc.string(),
        (className: undefined, defaultClassName: string): boolean => {
          const concatenated: string = concatClassName(
            className,
            defaultClassName,
          )

          const isDefaultClassName: boolean = concatenated === defaultClassName

          expect(isDefaultClassName).toBeTrue()

          return isDefaultClassName
        },
      ),
    )
  })

  it('concatClassName output always includes defaultClassName', (): void => {
    expect.hasAssertions()

    fc.assert(
      fc.property(
        fc.string(),
        fc.string(),
        (className: string, defaultClassName: string): boolean => {
          const concatenated: string = concatClassName(
            className,
            defaultClassName,
          )

          const includesDefaultClassName: boolean =
            concatenated.includes(defaultClassName)

          expect(includesDefaultClassName).toBeTrue()

          return includesDefaultClassName
        },
      ),
    )
  })
})
