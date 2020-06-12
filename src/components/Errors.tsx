import React, { FC } from 'react'

import { Container } from 'src/components/Container'
import { Error } from 'src/components/Error'
import { Header } from 'src/components/Header'
import type { Errors as ErrorsType } from 'src/lib/errors'

type Props = {
  errors: ErrorsType
}

export const Errors: FC<Props> = (props) => (
  <Container>
    <Header>Encountered the following errors:</Header>

    <Container className="space-y-2">
      {props.errors.map((error) => (
        <Error key={error.message} error={error} />
      ))}
    </Container>
  </Container>
)
