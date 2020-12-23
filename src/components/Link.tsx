import NextLink, { LinkProps } from 'next/link'
import React, { FC, PropsWithChildren, ReactElement } from 'react'

import { ClassNameProps, concatClassName } from 'src/lib/react'

export type Props = PropsWithChildren<LinkProps & ClassNameProps>

export const Link: FC<Props> = (props: Props): ReactElement => {
  const href: string | undefined =
    typeof props.as === 'string' ? props.as : undefined

  return (
    <NextLink
      as={props.as}
      href={props.href}
      locale={props.locale}
      passHref={props.passHref}
      prefetch={props.prefetch}
      replace={props.replace}
      scroll={props.scroll}
      shallow={props.shallow}
    >
      <a
        className={concatClassName(props.classNameProp, 'hover:underline')}
        href={href}
      >
        {props.children}
      </a>
    </NextLink>
  )
}
