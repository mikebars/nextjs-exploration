import React, { FC } from 'react'

type Props = {
  error: Error
}

export const Error: FC<Props> = (props) => {
  return <div className="break-words w-3/4">{props.error.message}</div>
}
