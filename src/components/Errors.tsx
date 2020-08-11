import React, { FC, ReactElement } from 'react'

import { Container } from 'src/components/Container'
import {
  Error as ErrorComponent,
  Props as ErrorProps,
} from 'src/components/Error'
import { Header } from 'src/components/Header'

export type Props = {
  errors: Array<Error>
}

export const Errors: FC<Props> = (props: Props): ReactElement => (
  <Container>
    <Header>Encountered the following errors:</Header>

    <Container className="space-y-2">
      {props.errors.map(
        (error: Error): React.ReactElement<ErrorProps> => (
          <ErrorComponent key={error.message} error={error} />
        ),
      )}
    </Container>
  </Container>
)
