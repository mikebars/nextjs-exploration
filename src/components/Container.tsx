import React, { FC, PropsWithChildren, ReactElement } from 'react'

import { ClassNameProps, concatClassName } from 'src/lib/react'

export type Props = PropsWithChildren<ClassNameProps>

export const Container: FC<Props> = (props: Props): ReactElement => {
  return (
    <div
      className={concatClassName(
        props.classNameProp,
        'flex flex-col items-center justify-center max-w-full',
      )}
    >
      {props.children}
    </div>
  )
}
