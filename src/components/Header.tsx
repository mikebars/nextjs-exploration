import React, { FC, PropsWithChildren, ReactElement } from 'react'

import { ClassNameProps, concatClassName } from 'src/lib/react'

export type Props = PropsWithChildren<ClassNameProps>

export const Header: FC<Props> = (props: Props): ReactElement => {
  return (
    <div className={concatClassName(props.className, 'text-2xl')}>
      {props.children}
    </div>
  )
}
