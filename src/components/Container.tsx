import React, { FC } from 'react'

import { ClassNameProps, concatClassName } from 'src/lib/react'

type Props = ClassNameProps

export const Container: FC<Props> = (props) => {
  const defaultClassName =
    'flex flex-col items-center justify-center max-w-full'

  return (
    <div className={concatClassName(props.className, defaultClassName)}>
      {props.children}
    </div>
  )
}
