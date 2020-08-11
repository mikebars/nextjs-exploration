import * as fp from 'fp-ts'
import unfetch from 'isomorphic-unfetch'
import * as Next from 'next'
import Head from 'next/head'
import React, { Fragment, ReactElement } from 'react'

import { AllBreeds, AllBreedsSuccess, getAllBreeds } from 'src/api/getAllBreeds'
import { Container } from 'src/components/Container'
import { Errors } from 'src/components/Errors'
import { Header } from 'src/components/Header'
import { Link } from 'src/components/Link'
import type { ApiEnvironment } from 'src/lib/api'

export type Props = {
  allBreeds: AllBreeds
}

export type SortedBreedsSuccess = Array<[string, Array<string>]>

export type SortedBreeds = fp.either.Either<Array<Error>, SortedBreedsSuccess>

export type SortBreeds = (allBreeds: AllBreeds) => SortedBreeds

export const sortBreeds: SortBreeds = (allBreeds: AllBreeds): SortedBreeds =>
  fp.pipeable.pipe(
    allBreeds,
    fp.either.map(
      ({ message }: AllBreedsSuccess): SortedBreedsSuccess =>
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

export const Breeds: Next.NextPage<Props> = (props: Props): ReactElement => {
  const sortedBreeds: SortedBreeds = sortBreeds(props.allBreeds)

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
              (errors: Array<Error>): ReactElement => (
                <Errors errors={errors} />
              ),
              (breeds: SortedBreedsSuccess): ReactElement => (
                <>
                  {breeds.map(
                    ([
                      breed,
                      subBreeds,
                    ]: SortedBreedsSuccess[number]): ReactElement => (
                      <Fragment key={breed}>
                        <Link as={`/breeds/${breed}`} href="/breeds/[breed]">
                          {breed}
                        </Link>
                        {subBreeds.map(
                          (subBreed: string): ReactElement => (
                            <Link
                              as={`/breeds/${breed}/${subBreed}`}
                              href="/breeds/[breed]/[subBreed]"
                              key={`${breed} (${subBreed})`}
                            >
                              {`${breed} (${subBreed})`}
                            </Link>
                          ),
                        )}
                      </Fragment>
                    ),
                  )}
                </>
              ),
            ),
          )}
        </Container>
      </Container>
    </>
  )
}

export type RawContext = Next.GetStaticPropsContext

export type StaticProps = Next.GetStaticPropsResult<Props>

export type GetStaticProps = Next.GetStaticProps<Props>

export type GenerateGetStaticProps = fp.reader.Reader<
  ApiEnvironment,
  GetStaticProps
>

export const generateGetStaticProps: GenerateGetStaticProps = (
  r: ApiEnvironment,
): GetStaticProps => async (_rawContext: RawContext): Promise<StaticProps> => {
  const allBreeds: AllBreeds = await getAllBreeds(r)()

  const props: Props = { allBreeds }

  return { props }
}

export const getStaticProps: GetStaticProps = generateGetStaticProps({
  fetch: unfetch,
})

/* tslint:disable-next-line:no-default-export */
export default Breeds
