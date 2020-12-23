import { render, RenderResult } from '@testing-library/react'
import * as fc from 'fast-check'
import * as fp from 'fp-ts'
import React from 'react'

import type { ApiEnvironment } from 'src/lib/api'
import {
  DecodedContext,
  generateGetStaticPaths,
  generateGetStaticProps,
  Query,
  RawContext,
  StaticPaths,
  StaticProps,
  SubBreed,
} from 'src/pages/breeds/[breed]/[subBreed]'
import { defaultAllBreedsSuccess } from 'src/__tests__/api/getAllBreeds.test.helpers'
import { defaultSubBreedImagesSuccess } from 'src/__tests__/api/getSubBreedImages.test.helpers'
import {
  environmentArbitrary,
  fetchReturnFailure,
  fetchReturnSuccess,
} from 'src/__tests__/lib/api.test.helpers'
import { getStaticPropsContextArbitrary } from 'src/__tests__/lib/next.test.helpers'

const fetchReturnFailureAsync: () => Promise<Response> = async (): Promise<Response> => {
  const response: Response = await fetchReturnFailure('failure')

  return response
}

describe('subBreed', (): void => {
  it('subBreed snapshot test Left', (): void => {
    expect.hasAssertions()

    const renderResult: RenderResult = render(
      <SubBreed
        context={fp.either.left([])}
        subBreedImages={fp.either.left([])}
      />,
    )

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="p-6 flex flex-col items-center justify-center max-w-full"
        >
          <div
            class="flex flex-col items-center justify-center max-w-full"
          >
            <div
              class="text-2xl"
            >
              Encountered the following errors:
            </div>
            <div
              class="space-y-2 flex flex-col items-center justify-center max-w-full"
            />
          </div>
          <div
            class="space-y-4 flex flex-col items-center justify-center max-w-full"
          >
            <div
              class="flex flex-col items-center justify-center max-w-full"
            >
              <div
                class="text-2xl"
              >
                Encountered the following errors:
              </div>
              <div
                class="space-y-2 flex flex-col items-center justify-center max-w-full"
              />
            </div>
          </div>
        </div>
      </DocumentFragment>
    `)
  })

  it('subBreed snapshot test Right', (): void => {
    expect.hasAssertions()

    const renderResult: RenderResult = render(
      <SubBreed
        context={fp.either.right({ params: { breed: '', subBreed: '' } })}
        subBreedImages={fp.either.right(defaultSubBreedImagesSuccess)}
      />,
    )

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="p-6 flex flex-col items-center justify-center max-w-full"
        >
          <div
            class="p-3 text-2xl"
          >
            Images of:  ()
          </div>
          <div
            class="space-y-4 flex flex-col items-center justify-center max-w-full"
          >
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_10832.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_10982.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_11006.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_11172.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_11182.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1126.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1128.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_11432.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1145.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_115.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1150.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_11570.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_11584.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1167.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1186.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_11953.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1222.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1234.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_12364.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1254.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_12563.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1259.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_12664.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1270.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_12867.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_12879.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_12945.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1301.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_13011.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_13145.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_13270.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1335.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_13442.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_13502.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1357.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1370.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_13742.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_13879.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_13907.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_13909.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1406.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1410.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1430.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1459.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1475.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1479.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1534.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1592.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1611.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1618.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1661.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1724.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_173.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1823.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1829.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1841.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_185.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1882.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1907.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1917.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1924.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1932.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2062.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2131.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2173.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_227.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2292.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_231.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2458.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_251.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2522.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2545.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2559.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_26.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2626.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2641.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_266.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2700.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_272.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2726.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2732.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2738.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2798.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2803.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2822.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2879.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_294.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_305.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3051.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3057.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3059.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3075.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3080.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3119.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3159.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3201.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3233.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3252.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3374.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3396.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3400.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_342.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3500.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3531.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3564.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_357.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3582.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3588.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3593.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3596.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3613.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3620.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3629.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3630.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3641.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3653.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3749.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3793.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3836.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3850.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3856.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3858.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_392.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3920.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3937.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3944.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3949.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3982.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_3989.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4027.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4037.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4049.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4072.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4114.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4143.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4195.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4219.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4230.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4290.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4307.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4310.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4314.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4352.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4396.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4406.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4420.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4426.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4434.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4450.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4464.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4467.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4497.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4501.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4511.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4517.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4521.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4583.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4586.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4598.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4635.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4678.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_472.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4759.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4768.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_482.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4837.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_4870.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5080.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_515.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5150.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_522.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5244.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5265.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5285.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5326.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5345.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5355.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_537.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5381.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5413.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5436.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5488.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5504.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5517.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5521.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5559.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5812.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5855.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5927.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_5939.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_60.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_6035.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_6241.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_6372.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_6430.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_6485.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_649.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_6493.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_6690.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_688.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_7106.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_713.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_7131.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_7146.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_7229.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_7260.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_732.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_7636.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_7683.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_7894.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_791.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_8063.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_8290.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_8315.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_8362.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_8465.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_8631.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_8682.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_875.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_8764.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_890.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_899.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_907.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_908.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_913.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_9197.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_9220.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_9229.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_93.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_9523.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_980.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_986.jpg"
            />
            <img
              alt=""
              class="h-64 w-64"
              role="presentation"
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_988.jpg"
            />
          </div>
        </div>
      </DocumentFragment>
    `)
  })

  it('subBreed generateGetStaticPaths decodes valid data as Right', async (): Promise<void> => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        environmentArbitrary(
          async (): Promise<Response> => {
            const response: Response = await fetchReturnSuccess(
              defaultAllBreedsSuccess,
            )

            return response
          },
        ),
        async (r: ApiEnvironment): Promise<boolean> => {
          const staticPaths: StaticPaths = await generateGetStaticPaths(r)({})

          const isValid: boolean = fp.array.isNonEmpty(staticPaths.paths)

          expect(isValid).toBeTrue()

          return isValid
        },
      ),
    )
  })

  it('subBreed generateGetStaticPaths decodes invalid data as Left', async (): Promise<void> => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        environmentArbitrary(fetchReturnFailureAsync),
        async (r: ApiEnvironment): Promise<boolean> => {
          const staticPaths: StaticPaths = await generateGetStaticPaths(r)({})

          const isInvalid: boolean = fp.array.isEmpty(staticPaths.paths)

          expect(isInvalid).toBeTrue()

          return isInvalid
        },
      ),
    )
  })

  it('subBreed generateGetStaticProps decodes valid data as Right', async (): Promise<void> => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        environmentArbitrary(
          async (): Promise<Response> => {
            const response: Response = await fetchReturnSuccess(
              defaultSubBreedImagesSuccess,
            )

            return response
          },
        ),
        getStaticPropsContextArbitrary(
          fc.record({ breed: fc.string(), subBreed: fc.string() }),
        ),
        async (
          r: ApiEnvironment,
          context: DecodedContext,
        ): Promise<boolean> => {
          const staticProps: StaticProps = await generateGetStaticProps(r)(
            context,
          )

          const isValid: boolean =
            'props' in staticProps &&
            fp.either.isRight(staticProps.props.subBreedImages)

          expect(isValid).toBeTrue()

          return isValid
        },
      ),
    )
  })

  it('subBreed generateGetStaticProps decodes invalid data as Left', async (): Promise<void> => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        environmentArbitrary(fetchReturnFailureAsync),
        getStaticPropsContextArbitrary<Query>(),
        async (r: ApiEnvironment, context: RawContext): Promise<boolean> => {
          const staticProps: StaticProps = await generateGetStaticProps(r)(
            context,
          )

          const isInvalid: boolean =
            'props' in staticProps &&
            fp.either.isLeft(staticProps.props.subBreedImages)

          expect(isInvalid).toBeTrue()

          return isInvalid
        },
      ),
    )
  })
})
