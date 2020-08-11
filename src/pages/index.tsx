import type { NextPage } from 'next'
import Head from 'next/head'
import React, { ReactElement } from 'react'

import { Container } from 'src/components/Container'
import { Header } from 'src/components/Header'
import { Link } from 'src/components/Link'

export const Index: NextPage = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Dog Api!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="p-6">
        <Header className="p-3">Dog Api!</Header>

        <Container className="p-3">
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
