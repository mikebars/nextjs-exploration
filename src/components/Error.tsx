import React, { FC, ReactElement } from 'react'

import { ClassNameProps, concatClassName } from 'src/lib/react'

export type Props = ClassNameProps & {
  error: Error
}

export const Error: FC<Props> = (props: Props): ReactElement => {
  return (
    <div className={concatClassName(props.className, 'break-words w-3/4')}>
      {props.error.message}
    </div>
  )
}
