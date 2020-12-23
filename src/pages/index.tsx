import type { NextPage as Next_NextPage } from 'next'
import Head from 'next/head'
import React, { ReactElement } from 'react'

import { Container } from 'src/components/Container'
import { Header } from 'src/components/Header'
import { Link } from 'src/components/Link'

export const Index: Next_NextPage = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Dog Api!</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Container classNameProp="p-6">
        <Header classNameProp="p-3">Dog Api!</Header>

        <Container classNameProp="p-3">
          <Link as="/breeds" href="/breeds">
            See all breeds
          </Link>
        </Container>
      </Container>
    </>
  )
}

/* tslint:disable-next-line:no-default-export */
export default Index
