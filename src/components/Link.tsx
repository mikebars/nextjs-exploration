/* tslint:disable-next-line:match-default-export-name */
import NextLink, { LinkProps } from 'next/link'
import React, { FC } from 'react'

import { ClassNameProps, concatClassName } from 'src/lib/react'

type Props = LinkProps & ClassNameProps

export const Link: FC<Props> = (props) => {
  const { children, className, ...linkProps } = props

  const defaultClassName = 'hover:underline'

  const href = typeof linkProps.as === 'string' ? linkProps.as : undefined

  return (
    <NextLink {...linkProps}>
      <a className={concatClassName(className, defaultClassName)} href={href}>
        {children}
      </a>
    </NextLink>
  )
}
