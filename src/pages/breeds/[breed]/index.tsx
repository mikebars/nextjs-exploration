import * as fp from 'fp-ts'
import * as io from 'io-ts'
import unfetch from 'isomorphic-unfetch'
import type {
  GetStaticPaths as Next_GetStaticPaths,
  GetStaticProps as Next_GetStaticProps,
  GetStaticPropsContext as Next_GetStaticPropsContext,
  GetStaticPropsResult as Next_GetStaticPropsResult,
  NextPage as Next_NextPage,
} from 'next'
import Head from 'next/head'
import React, { ReactElement } from 'react'

import { AllBreeds, AllBreedsSuccess, getAllBreeds } from 'src/api/getAllBreeds'
import {
  BreedImages,
  BreedImagesSuccess,
  generateGetBreedImages,
  GetBreedImages,
} from 'src/api/getBreedImages'
import { Container } from 'src/components/Container'
import { Errors } from 'src/components/Errors'
import { Header } from 'src/components/Header'
import { ApiEnvironment, mapValidationErrorToError } from 'src/lib/api'
import {
  GetStaticPathsResult,
  GetStaticPropsDecodedContext,
  GetStaticPropsDecodedContextCodec,
  Path,
  Paths,
} from 'src/lib/next'

export type Props = {
  breedImages: BreedImages
  context: Context
}

export type Query = {
  breed: string
}

export const Breed: Next_NextPage<Props> = (props: Props): ReactElement => {
  return (
    <>
      <Head>
        <title>Breed: </title>
      </Head>

      <Container classNameProp="p-6">
        {fp.pipeable.pipe(
          props.context,
          fp.either.fold(
            (errors: Array<Error>): ReactElement => <Errors errors={errors} />,
            ({ params: { breed } }: DecodedContext): ReactElement => (
              <Header classNameProp="p-3">{`Images of: ${breed}`}</Header>
            ),
          ),
        )}

        <Container classNameProp="space-y-4">
          {fp.pipeable.pipe(
            props.breedImages,
            fp.either.fold(
              (errors: Array<Error>): ReactElement => (
                <Errors errors={errors} />
              ),
              ({ message: images }: BreedImagesSuccess): ReactElement => (
                <>
                  {images.map(
                    (image: string): ReactElement => (
                      <img
                        alt=""
                        className="h-64 w-64"
                        key={image}
                        role="presentation"
                        src={image}
                      />
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

export type StaticPaths = GetStaticPathsResult<Query>

export type GetStaticPaths = Next_GetStaticPaths<Query>

export type GenerateGetStaticPaths = fp.reader.Reader<
  ApiEnvironment,
  GetStaticPaths
>

export const generateGetStaticPaths: GenerateGetStaticPaths = (
  r: ApiEnvironment,
): GetStaticPaths => async (): Promise<StaticPaths> => {
  const allBreeds: AllBreeds = await getAllBreeds(r)()

  const paths: Paths<Query> = fp.pipeable.pipe(
    allBreeds,
    fp.either.map(
      ({ message }: AllBreedsSuccess): Paths<Query> =>
        fp.pipeable.pipe(
          message,
          fp.record.keys,
          fp.array.map((breed: string): Path<Query> => ({ params: { breed } })),
        ),
    ),
    fp.either.getOrElse(fp.function.constant<Paths<Query>>([])),
  )

  return { fallback: false, paths }
}

export const getStaticPaths: GetStaticPaths = generateGetStaticPaths({
  fetch: unfetch,
})

export type RawContext = Next_GetStaticPropsContext<Query>

export type DecodedContext = GetStaticPropsDecodedContext<Query>

export const QueryCodec: io.Type<Query> = io.type({
  breed: io.string,
})

export const ContextCodec: io.Type<DecodedContext> = GetStaticPropsDecodedContextCodec(
  QueryCodec,
)

export type Context = fp.either.Either<Array<Error>, DecodedContext>

export type StaticProps = Next_GetStaticPropsResult<Props>

export type GetStaticProps = Next_GetStaticProps<Props, Query>

export const generateGetStaticProps: fp.reader.Reader<
  ApiEnvironment,
  GetStaticProps
> = (r: ApiEnvironment): GetStaticProps => async (
  rawContext: RawContext,
): Promise<StaticProps> => {
  const context: Context = fp.pipeable.pipe(
    ContextCodec.decode(rawContext),
    fp.either.mapLeft(mapValidationErrorToError),
    fp.either.map(
      fp.record.filter(Boolean) as (rc: RawContext) => DecodedContext,
    ),
  )

  const getBreedImages: GetBreedImages = fp.pipeable.pipe(
    fp.readerTaskEither.fromEither(context),
    fp.readerTaskEither.chain(
      ({ params: { breed } }: DecodedContext): GetBreedImages =>
        generateGetBreedImages({ breed }),
    ),
  )

  const breedImages: BreedImages = await getBreedImages(r)()

  const props: Props = { breedImages, context }

  return { props }
}

export const getStaticProps: GetStaticProps = generateGetStaticProps({
  fetch: unfetch,
})

/* tslint:disable-next-line:no-default-export */
export default Breed
