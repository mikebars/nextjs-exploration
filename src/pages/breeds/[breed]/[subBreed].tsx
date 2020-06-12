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

import { getAllBreeds } from 'src/api/getAllBreeds'
import {
  generateGetSubBreedImages,
  GetSubBreedImages,
  SubBreedImages,
} from 'src/api/getSubBreedImages'
import { Container } from 'src/components/Container'
import { Errors } from 'src/components/Errors'
import { Header } from 'src/components/Header'
import { ApiEnvironment, mapValidationErrorToError } from 'src/lib/api'
import type { Errors as ErrorsType } from 'src/lib/errors'
import { GetStaticPropsContextCodec, Paths } from 'src/lib/next'

type Props = {
  context: Context
  subBreedImages: SubBreedImages
}

const SubBreed: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Sub Breed: </title>
      </Head>

      <Container className="p-6">
        {fp.pipeable.pipe(
          props.context,
          fp.either.fold(
            (errors) => <Errors errors={errors} />,
            ({ params: { breed, subBreed } }) => (
              <Header className="p-3">{`Images of: ${breed} (${subBreed})`}</Header>
            ),
          ),
        )}

        <Container className="space-y-4">
          {fp.pipeable.pipe(
            props.subBreedImages,
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

  const allBreeds = await getAllBreeds(r)()

  const paths: Paths = fp.pipeable.pipe(
    allBreeds,
    fp.either.map(({ message }) =>
      fp.pipeable.pipe(
        message,
        fp.record.toArray,
        fp.array.filter(([_breed, subBreeds]) =>
          fp.array.isNonEmpty(subBreeds),
        ),
        fp.array.chain(([breed, subBreeds]) =>
          subBreeds.map((subBreed) => ({ params: { breed, subBreed } })),
        ),
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
    subBreed: string
  }
}

const ContextCodec: io.Type<ContextCodec> = io.intersection([
  GetStaticPropsContextCodec,
  io.type({
    params: io.type({
      breed: io.string,
      subBreed: io.string,
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

  const getSubBreedImages: GetSubBreedImages = fp.pipeable.pipe(
    fp.readerTaskEither.fromEither(context),
    fp.readerTaskEither.chain(({ params }) =>
      generateGetSubBreedImages(params),
    ),
  )

  const subBreedImages: SubBreedImages = await getSubBreedImages(r)()

  const props: Props = { context, subBreedImages }

  return { props }
}

export const getStaticProps: GetStaticProps<Props> = generateGetStaticProps({
  fetch: unfetch,
})

/* tslint:disable-next-line:no-default-export */
export default SubBreed
