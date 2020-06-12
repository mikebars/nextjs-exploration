import * as fc from 'fast-check'

import { concatClassName } from 'src/lib/react'

describe('concatClassName', () => {
  it('concatClassName output is defaultClassName when className is undefined', () => {
    expect.hasAssertions()

    fc.assert(
      fc.property(
        fc.constant(undefined),
        fc.string(),
        (className, defaultClassName) => {
          const concatenated = concatClassName(className, defaultClassName)

          const isDefaultClassName = concatenated === defaultClassName

          expect(isDefaultClassName).toBe(true)

          return isDefaultClassName
        },
      ),
    )
  })

  it('concatClassName output always includes defaultClassName', () => {
    expect.hasAssertions()

    fc.assert(
      fc.property(fc.string(), fc.string(), (className, defaultClassName) => {
        const concatenated = concatClassName(className, defaultClassName)

        const includesDefaultClassName = concatenated.includes(defaultClassName)

        expect(includesDefaultClassName).toBe(true)

        return includesDefaultClassName
      }),
    )
  })
})
