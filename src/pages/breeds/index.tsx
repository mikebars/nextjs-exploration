import * as fp from 'fp-ts'
import unfetch from 'isomorphic-unfetch'
import type {
  GetStaticProps as Next_GetStaticProps,
  GetStaticPropsContext as Next_GetStaticPropsContext,
  GetStaticPropsResult as Next_GetStaticPropsResult,
  NextPage as Next_NextPage,
} from 'next'
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

export const Breeds: Next_NextPage<Props> = (props: Props): ReactElement => {
  const sortedBreeds: SortedBreeds = sortBreeds(props.allBreeds)

  return (
    <>
      <Head>
        <title>All Breeds</title>
      </Head>

      <Container classNameProp="p-6">
        <Header classNameProp="p-3">All Breeds</Header>

        <Container classNameProp="space-y-1">
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

export type RawContext = Next_GetStaticPropsContext

export type StaticProps = Next_GetStaticPropsResult<Props>

export type GetStaticProps = Next_GetStaticProps<Props>

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
