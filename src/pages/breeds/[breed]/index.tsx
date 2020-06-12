import * as fp from 'fp-ts'
import * as io from 'io-ts'
import unfetch from 'isomorphic-unfetch'
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next'
import Head from 'next/head'
import React from 'react'

import { AllBreeds, getAllBreeds } from 'src/api/getAllBreeds'
import {
  BreedImages,
  generateGetBreedImages,
  GetBreedImages,
} from 'src/api/getBreedImages'
import { Container } from 'src/components/Container'
import { Errors } from 'src/components/Errors'
import { Header } from 'src/components/Header'
import { ApiEnvironment, mapValidationErrorToError } from 'src/lib/api'
import type { Errors as ErrorsType } from 'src/lib/errors'
import { GetStaticPropsContextCodec, Paths } from 'src/lib/next'

type Props = {
  breedImages: BreedImages
  context: Context
}

const Breed: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Breed: </title>
      </Head>

      <Container className="p-6">
        {fp.pipeable.pipe(
          props.context,
          fp.either.fold(
            (errors) => <Errors errors={errors} />,
            ({ params: { breed } }) => (
              <Header className="p-3">{`Images of: ${breed}`}</Header>
            ),
          ),
        )}

        <Container className="space-y-4">
          {fp.pipeable.pipe(
            props.breedImages,
            fp.either.fold(
              (errors) => <Errors errors={errors} />,
              ({ message: images }) => (
                <>
                  {images.map((image) => (
                    <img
                      alt=""
                      className="h-64 w-64"
                      key={image}
                      role="presentation"
                      src={image}
                    />
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

export const generateGetStaticPaths: fp.reader.Reader<
  ApiEnvironment,
  GetStaticPaths
> = (r) => async () => {
  const fallback = false

  const allBreeds: AllBreeds = await getAllBreeds(r)()

  const paths: Paths = fp.pipeable.pipe(
    allBreeds,
    fp.either.map(({ message }) =>
      fp.pipeable.pipe(
        message,
        fp.record.keys,
        fp.array.map((breed) => ({ params: { breed } })),
      ),
    ),
    fp.either.getOrElse(fp.function.constant<Paths>([])),
  )

  return { fallback, paths }
}

export const getStaticPaths: GetStaticPaths = generateGetStaticPaths({
  fetch: unfetch,
})

type ContextCodec = GetStaticPropsContext & {
  params: {
    breed: string
  }
}

const ContextCodec: io.Type<ContextCodec> = io.intersection([
  GetStaticPropsContextCodec,
  io.type({
    params: io.type({
      breed: io.string,
    }),
  }),
])

type Context = fp.either.Either<ErrorsType, ContextCodec>

export const generateGetStaticProps: fp.reader.Reader<
  ApiEnvironment,
  GetStaticProps<Props>
> = (r) => async (rawContext) => {
  const context: Context = fp.pipeable.pipe(
    ContextCodec.decode(rawContext),
    fp.either.mapLeft(mapValidationErrorToError),
  )

  const getBreedImages: GetBreedImages = fp.pipeable.pipe(
    fp.readerTaskEither.fromEither(context),
    fp.readerTaskEither.chain(({ params: { breed } }) =>
      generateGetBreedImages({ breed }),
    ),
  )

  const breedImages: BreedImages = await getBreedImages(r)()

  const props: Props = { breedImages, context }

  return { props }
}

export const getStaticProps: GetStaticProps<Props> = generateGetStaticProps({
  fetch: unfetch,
})

/* tslint:disable-next-line:no-default-export */
export default Breed
