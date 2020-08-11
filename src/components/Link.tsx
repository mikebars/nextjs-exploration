import { default as NextLink, LinkProps } from 'next/link'
import React, { FC, PropsWithChildren, ReactElement } from 'react'

import { ClassNameProps, concatClassName } from 'src/lib/react'

export type Props = PropsWithChildren<LinkProps & ClassNameProps>

export const Link: FC<Props> = (props: Props): ReactElement => {
  const { children, className, ...linkProps }: Props = props

  const href: string | undefined =
    typeof linkProps.as === 'string' ? linkProps.as : undefined

  return (
    <NextLink {...linkProps}>
      <a className={concatClassName(className, 'hover:underline')} href={href}>
        {children}
      </a>
    </NextLink>
  )
}
