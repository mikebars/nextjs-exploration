import * as fp from 'fp-ts'
import unfetch from 'isomorphic-unfetch'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React, { Fragment } from 'react'

import { AllBreeds, getAllBreeds } from 'src/api/getAllBreeds'
import { Container } from 'src/components/Container'
import { Errors } from 'src/components/Errors'
import { Header } from 'src/components/Header'
import { Link } from 'src/components/Link'
import { ApiEnvironment } from 'src/lib/api'

type Props = {
  allBreeds: AllBreeds
}

const Breeds: NextPage<Props> = (props) => {
  const sortedBreeds = fp.pipeable.pipe(
    props.allBreeds,
    fp.either.map(({ message }) =>
      fp.pipeable.pipe(
        message,
        fp.record.toArray,
        fp.array.sort(
          fp.ord.getTupleOrd(
            fp.ord.ordString,
            fp.array.getOrd(fp.ord.ordString),
          ),
        ),
      ),
    ),
  )

  return (
    <>
      <Head>
        <title>All Breeds</title>
      </Head>

      <Container className="p-6">
        <Header className="p-3">All Breeds</Header>

        <Container className="space-y-1">
          {fp.pipeable.pipe(
            sortedBreeds,
            fp.either.fold(
              (errors) => <Errors errors={errors} />,
              (breeds) => (
                <>
                  {breeds.map(([breed, subBreeds]) => (
                    <Fragment key={breed}>
                      <Link as={`/breeds/${breed}`} href="/breeds/[breed]">
                        {breed}
                      </Link>
                      {subBreeds.map((subBreed) => (
                        <Link
                          as={`/breeds/${breed}/${subBreed}`}
                          href="/breeds/[breed]/[subBreed]"
                          key={`${breed} (${subBreed})`}
                        >
                          {`${breed} (${subBreed})`}
                        </Link>
                      ))}
                    </Fragment>
                  ))}
                </>
              ),
            ),
          )}
        </Container>
      </Container>
    </>
  )
}

export const generateGetStaticProps: fp.reader.Reader<
  ApiEnvironment,
  GetStaticProps<Props>
> = (r) => async (_rawContext) => {
  const allBreeds = await getAllBreeds(r)()

  const props = { allBreeds }

  return { props }
}

export const getStaticProps: GetStaticProps<Props> = generateGetStaticProps({
  fetch: unfetch,
})

/* tslint:disable-next-line:no-default-export */
export default Breeds
