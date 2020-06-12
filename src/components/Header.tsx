import React, { FC } from 'react'

import { ClassNameProps, concatClassName } from 'src/lib/react'

type Props = ClassNameProps

export const Header: FC<Props> = (props) => {
  const defaultClassName = 'text-2xl'

  return (
    <div className={concatClassName(props.className, defaultClassName)}>
      {props.children}
    </div>
  )
}
