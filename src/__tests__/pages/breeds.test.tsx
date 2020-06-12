/* tslint:disable:max-file-line-count */
import { render } from '@testing-library/react'
import * as fc from 'fast-check'
import * as fp from 'fp-ts'
import React from 'react'

import Breeds, { generateGetStaticProps } from 'src/pages/breeds/index'
import { defaultAllBreedsSuccess } from 'src/__tests__/api/getAllBreeds.test.helpers'
import {
  environmentArbitrary,
  fetchReturnFailure,
  fetchReturnSuccess,
} from 'src/__tests__/lib/api.test.helpers'
import { getStaticPropsContextArbitrary } from 'src/__tests__/lib/next.test.helpers'

describe('breeds', () => {
  it('breeds snapshot test Left', () => {
    expect.hasAssertions()

    const renderResult = render(<Breeds allBreeds={fp.either.left([])} />)

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="p-6 flex flex-col items-center justify-center max-w-full"
        >
          <div
            class="p-3 text-2xl"
          >
            All Breeds
          </div>
          <div
            class="space-y-1 flex flex-col items-center justify-center max-w-full"
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

  it('breeds snapshot test Right', () => {
    expect.hasAssertions()

    const renderResult = render(
      <Breeds allBreeds={fp.either.right(defaultAllBreedsSuccess)} />,
    )

    expect(renderResult.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="p-6 flex flex-col items-center justify-center max-w-full"
        >
          <div
            class="p-3 text-2xl"
          >
            All Breeds
          </div>
          <div
            class="space-y-1 flex flex-col items-center justify-center max-w-full"
          >
            <a
              class="hover:underline"
              href="/breeds/affenpinscher"
            >
              affenpinscher
            </a>
            <a
              class="hover:underline"
              href="/breeds/african"
            >
              african
            </a>
            <a
              class="hover:underline"
              href="/breeds/airedale"
            >
              airedale
            </a>
            <a
              class="hover:underline"
              href="/breeds/akita"
            >
              akita
            </a>
            <a
              class="hover:underline"
              href="/breeds/appenzeller"
            >
              appenzeller
            </a>
            <a
              class="hover:underline"
              href="/breeds/australian"
            >
              australian
            </a>
            <a
              class="hover:underline"
              href="/breeds/australian/shepherd"
            >
              australian (shepherd)
            </a>
            <a
              class="hover:underline"
              href="/breeds/basenji"
            >
              basenji
            </a>
            <a
              class="hover:underline"
              href="/breeds/beagle"
            >
              beagle
            </a>
            <a
              class="hover:underline"
              href="/breeds/bluetick"
            >
              bluetick
            </a>
            <a
              class="hover:underline"
              href="/breeds/borzoi"
            >
              borzoi
            </a>
            <a
              class="hover:underline"
              href="/breeds/bouvier"
            >
              bouvier
            </a>
            <a
              class="hover:underline"
              href="/breeds/boxer"
            >
              boxer
            </a>
            <a
              class="hover:underline"
              href="/breeds/brabancon"
            >
              brabancon
            </a>
            <a
              class="hover:underline"
              href="/breeds/briard"
            >
              briard
            </a>
            <a
              class="hover:underline"
              href="/breeds/buhund"
            >
              buhund
            </a>
            <a
              class="hover:underline"
              href="/breeds/buhund/norwegian"
            >
              buhund (norwegian)
            </a>
            <a
              class="hover:underline"
              href="/breeds/bulldog"
            >
              bulldog
            </a>
            <a
              class="hover:underline"
              href="/breeds/bulldog/boston"
            >
              bulldog (boston)
            </a>
            <a
              class="hover:underline"
              href="/breeds/bulldog/english"
            >
              bulldog (english)
            </a>
            <a
              class="hover:underline"
              href="/breeds/bulldog/french"
            >
              bulldog (french)
            </a>
            <a
              class="hover:underline"
              href="/breeds/bullterrier"
            >
              bullterrier
            </a>
            <a
              class="hover:underline"
              href="/breeds/bullterrier/staffordshire"
            >
              bullterrier (staffordshire)
            </a>
            <a
              class="hover:underline"
              href="/breeds/cairn"
            >
              cairn
            </a>
            <a
              class="hover:underline"
              href="/breeds/cattledog"
            >
              cattledog
            </a>
            <a
              class="hover:underline"
              href="/breeds/cattledog/australian"
            >
              cattledog (australian)
            </a>
            <a
              class="hover:underline"
              href="/breeds/chihuahua"
            >
              chihuahua
            </a>
            <a
              class="hover:underline"
              href="/breeds/chow"
            >
              chow
            </a>
            <a
              class="hover:underline"
              href="/breeds/clumber"
            >
              clumber
            </a>
            <a
              class="hover:underline"
              href="/breeds/cockapoo"
            >
              cockapoo
            </a>
            <a
              class="hover:underline"
              href="/breeds/collie"
            >
              collie
            </a>
            <a
              class="hover:underline"
              href="/breeds/collie/border"
            >
              collie (border)
            </a>
            <a
              class="hover:underline"
              href="/breeds/coonhound"
            >
              coonhound
            </a>
            <a
              class="hover:underline"
              href="/breeds/corgi"
            >
              corgi
            </a>
            <a
              class="hover:underline"
              href="/breeds/corgi/cardigan"
            >
              corgi (cardigan)
            </a>
            <a
              class="hover:underline"
              href="/breeds/cotondetulear"
            >
              cotondetulear
            </a>
            <a
              class="hover:underline"
              href="/breeds/dachshund"
            >
              dachshund
            </a>
            <a
              class="hover:underline"
              href="/breeds/dalmatian"
            >
              dalmatian
            </a>
            <a
              class="hover:underline"
              href="/breeds/dane"
            >
              dane
            </a>
            <a
              class="hover:underline"
              href="/breeds/dane/great"
            >
              dane (great)
            </a>
            <a
              class="hover:underline"
              href="/breeds/deerhound"
            >
              deerhound
            </a>
            <a
              class="hover:underline"
              href="/breeds/deerhound/scottish"
            >
              deerhound (scottish)
            </a>
            <a
              class="hover:underline"
              href="/breeds/dhole"
            >
              dhole
            </a>
            <a
              class="hover:underline"
              href="/breeds/dingo"
            >
              dingo
            </a>
            <a
              class="hover:underline"
              href="/breeds/doberman"
            >
              doberman
            </a>
            <a
              class="hover:underline"
              href="/breeds/elkhound"
            >
              elkhound
            </a>
            <a
              class="hover:underline"
              href="/breeds/elkhound/norwegian"
            >
              elkhound (norwegian)
            </a>
            <a
              class="hover:underline"
              href="/breeds/entlebucher"
            >
              entlebucher
            </a>
            <a
              class="hover:underline"
              href="/breeds/eskimo"
            >
              eskimo
            </a>
            <a
              class="hover:underline"
              href="/breeds/finnish"
            >
              finnish
            </a>
            <a
              class="hover:underline"
              href="/breeds/finnish/lapphund"
            >
              finnish (lapphund)
            </a>
            <a
              class="hover:underline"
              href="/breeds/frise"
            >
              frise
            </a>
            <a
              class="hover:underline"
              href="/breeds/frise/bichon"
            >
              frise (bichon)
            </a>
            <a
              class="hover:underline"
              href="/breeds/germanshepherd"
            >
              germanshepherd
            </a>
            <a
              class="hover:underline"
              href="/breeds/greyhound"
            >
              greyhound
            </a>
            <a
              class="hover:underline"
              href="/breeds/greyhound/italian"
            >
              greyhound (italian)
            </a>
            <a
              class="hover:underline"
              href="/breeds/groenendael"
            >
              groenendael
            </a>
            <a
              class="hover:underline"
              href="/breeds/havanese"
            >
              havanese
            </a>
            <a
              class="hover:underline"
              href="/breeds/hound"
            >
              hound
            </a>
            <a
              class="hover:underline"
              href="/breeds/hound/afghan"
            >
              hound (afghan)
            </a>
            <a
              class="hover:underline"
              href="/breeds/hound/basset"
            >
              hound (basset)
            </a>
            <a
              class="hover:underline"
              href="/breeds/hound/blood"
            >
              hound (blood)
            </a>
            <a
              class="hover:underline"
              href="/breeds/hound/english"
            >
              hound (english)
            </a>
            <a
              class="hover:underline"
              href="/breeds/hound/ibizan"
            >
              hound (ibizan)
            </a>
            <a
              class="hover:underline"
              href="/breeds/hound/plott"
            >
              hound (plott)
            </a>
            <a
              class="hover:underline"
              href="/breeds/hound/walker"
            >
              hound (walker)
            </a>
            <a
              class="hover:underline"
              href="/breeds/husky"
            >
              husky
            </a>
            <a
              class="hover:underline"
              href="/breeds/keeshond"
            >
              keeshond
            </a>
            <a
              class="hover:underline"
              href="/breeds/kelpie"
            >
              kelpie
            </a>
            <a
              class="hover:underline"
              href="/breeds/komondor"
            >
              komondor
            </a>
            <a
              class="hover:underline"
              href="/breeds/kuvasz"
            >
              kuvasz
            </a>
            <a
              class="hover:underline"
              href="/breeds/labrador"
            >
              labrador
            </a>
            <a
              class="hover:underline"
              href="/breeds/leonberg"
            >
              leonberg
            </a>
            <a
              class="hover:underline"
              href="/breeds/lhasa"
            >
              lhasa
            </a>
            <a
              class="hover:underline"
              href="/breeds/malamute"
            >
              malamute
            </a>
            <a
              class="hover:underline"
              href="/breeds/malinois"
            >
              malinois
            </a>
            <a
              class="hover:underline"
              href="/breeds/maltese"
            >
              maltese
            </a>
            <a
              class="hover:underline"
              href="/breeds/mastiff"
            >
              mastiff
            </a>
            <a
              class="hover:underline"
              href="/breeds/mastiff/bull"
            >
              mastiff (bull)
            </a>
            <a
              class="hover:underline"
              href="/breeds/mastiff/english"
            >
              mastiff (english)
            </a>
            <a
              class="hover:underline"
              href="/breeds/mastiff/tibetan"
            >
              mastiff (tibetan)
            </a>
            <a
              class="hover:underline"
              href="/breeds/mexicanhairless"
            >
              mexicanhairless
            </a>
            <a
              class="hover:underline"
              href="/breeds/mix"
            >
              mix
            </a>
            <a
              class="hover:underline"
              href="/breeds/mountain"
            >
              mountain
            </a>
            <a
              class="hover:underline"
              href="/breeds/mountain/bernese"
            >
              mountain (bernese)
            </a>
            <a
              class="hover:underline"
              href="/breeds/mountain/swiss"
            >
              mountain (swiss)
            </a>
            <a
              class="hover:underline"
              href="/breeds/newfoundland"
            >
              newfoundland
            </a>
            <a
              class="hover:underline"
              href="/breeds/otterhound"
            >
              otterhound
            </a>
            <a
              class="hover:underline"
              href="/breeds/ovcharka"
            >
              ovcharka
            </a>
            <a
              class="hover:underline"
              href="/breeds/ovcharka/caucasian"
            >
              ovcharka (caucasian)
            </a>
            <a
              class="hover:underline"
              href="/breeds/papillon"
            >
              papillon
            </a>
            <a
              class="hover:underline"
              href="/breeds/pekinese"
            >
              pekinese
            </a>
            <a
              class="hover:underline"
              href="/breeds/pembroke"
            >
              pembroke
            </a>
            <a
              class="hover:underline"
              href="/breeds/pinscher"
            >
              pinscher
            </a>
            <a
              class="hover:underline"
              href="/breeds/pinscher/miniature"
            >
              pinscher (miniature)
            </a>
            <a
              class="hover:underline"
              href="/breeds/pitbull"
            >
              pitbull
            </a>
            <a
              class="hover:underline"
              href="/breeds/pointer"
            >
              pointer
            </a>
            <a
              class="hover:underline"
              href="/breeds/pointer/german"
            >
              pointer (german)
            </a>
            <a
              class="hover:underline"
              href="/breeds/pointer/germanlonghair"
            >
              pointer (germanlonghair)
            </a>
            <a
              class="hover:underline"
              href="/breeds/pomeranian"
            >
              pomeranian
            </a>
            <a
              class="hover:underline"
              href="/breeds/poodle"
            >
              poodle
            </a>
            <a
              class="hover:underline"
              href="/breeds/poodle/miniature"
            >
              poodle (miniature)
            </a>
            <a
              class="hover:underline"
              href="/breeds/poodle/standard"
            >
              poodle (standard)
            </a>
            <a
              class="hover:underline"
              href="/breeds/poodle/toy"
            >
              poodle (toy)
            </a>
            <a
              class="hover:underline"
              href="/breeds/pug"
            >
              pug
            </a>
            <a
              class="hover:underline"
              href="/breeds/puggle"
            >
              puggle
            </a>
            <a
              class="hover:underline"
              href="/breeds/pyrenees"
            >
              pyrenees
            </a>
            <a
              class="hover:underline"
              href="/breeds/redbone"
            >
              redbone
            </a>
            <a
              class="hover:underline"
              href="/breeds/retriever"
            >
              retriever
            </a>
            <a
              class="hover:underline"
              href="/breeds/retriever/chesapeake"
            >
              retriever (chesapeake)
            </a>
            <a
              class="hover:underline"
              href="/breeds/retriever/curly"
            >
              retriever (curly)
            </a>
            <a
              class="hover:underline"
              href="/breeds/retriever/flatcoated"
            >
              retriever (flatcoated)
            </a>
            <a
              class="hover:underline"
              href="/breeds/retriever/golden"
            >
              retriever (golden)
            </a>
            <a
              class="hover:underline"
              href="/breeds/ridgeback"
            >
              ridgeback
            </a>
            <a
              class="hover:underline"
              href="/breeds/ridgeback/rhodesian"
            >
              ridgeback (rhodesian)
            </a>
            <a
              class="hover:underline"
              href="/breeds/rottweiler"
            >
              rottweiler
            </a>
            <a
              class="hover:underline"
              href="/breeds/saluki"
            >
              saluki
            </a>
            <a
              class="hover:underline"
              href="/breeds/samoyed"
            >
              samoyed
            </a>
            <a
              class="hover:underline"
              href="/breeds/schipperke"
            >
              schipperke
            </a>
            <a
              class="hover:underline"
              href="/breeds/schnauzer"
            >
              schnauzer
            </a>
            <a
              class="hover:underline"
              href="/breeds/schnauzer/giant"
            >
              schnauzer (giant)
            </a>
            <a
              class="hover:underline"
              href="/breeds/schnauzer/miniature"
            >
              schnauzer (miniature)
            </a>
            <a
              class="hover:underline"
              href="/breeds/setter"
            >
              setter
            </a>
            <a
              class="hover:underline"
              href="/breeds/setter/english"
            >
              setter (english)
            </a>
            <a
              class="hover:underline"
              href="/breeds/setter/gordon"
            >
              setter (gordon)
            </a>
            <a
              class="hover:underline"
              href="/breeds/setter/irish"
            >
              setter (irish)
            </a>
            <a
              class="hover:underline"
              href="/breeds/sheepdog"
            >
              sheepdog
            </a>
            <a
              class="hover:underline"
              href="/breeds/sheepdog/english"
            >
              sheepdog (english)
            </a>
            <a
              class="hover:underline"
              href="/breeds/sheepdog/shetland"
            >
              sheepdog (shetland)
            </a>
            <a
              class="hover:underline"
              href="/breeds/shiba"
            >
              shiba
            </a>
            <a
              class="hover:underline"
              href="/breeds/shihtzu"
            >
              shihtzu
            </a>
            <a
              class="hover:underline"
              href="/breeds/spaniel"
            >
              spaniel
            </a>
            <a
              class="hover:underline"
              href="/breeds/spaniel/blenheim"
            >
              spaniel (blenheim)
            </a>
            <a
              class="hover:underline"
              href="/breeds/spaniel/brittany"
            >
              spaniel (brittany)
            </a>
            <a
              class="hover:underline"
              href="/breeds/spaniel/cocker"
            >
              spaniel (cocker)
            </a>
            <a
              class="hover:underline"
              href="/breeds/spaniel/irish"
            >
              spaniel (irish)
            </a>
            <a
              class="hover:underline"
              href="/breeds/spaniel/japanese"
            >
              spaniel (japanese)
            </a>
            <a
              class="hover:underline"
              href="/breeds/spaniel/sussex"
            >
              spaniel (sussex)
            </a>
            <a
              class="hover:underline"
              href="/breeds/spaniel/welsh"
            >
              spaniel (welsh)
            </a>
            <a
              class="hover:underline"
              href="/breeds/springer"
            >
              springer
            </a>
            <a
              class="hover:underline"
              href="/breeds/springer/english"
            >
              springer (english)
            </a>
            <a
              class="hover:underline"
              href="/breeds/stbernard"
            >
              stbernard
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier"
            >
              terrier
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/american"
            >
              terrier (american)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/australian"
            >
              terrier (australian)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/bedlington"
            >
              terrier (bedlington)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/border"
            >
              terrier (border)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/dandie"
            >
              terrier (dandie)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/fox"
            >
              terrier (fox)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/irish"
            >
              terrier (irish)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/kerryblue"
            >
              terrier (kerryblue)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/lakeland"
            >
              terrier (lakeland)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/norfolk"
            >
              terrier (norfolk)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/norwich"
            >
              terrier (norwich)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/patterdale"
            >
              terrier (patterdale)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/russell"
            >
              terrier (russell)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/scottish"
            >
              terrier (scottish)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/sealyham"
            >
              terrier (sealyham)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/silky"
            >
              terrier (silky)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/tibetan"
            >
              terrier (tibetan)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/toy"
            >
              terrier (toy)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/westhighland"
            >
              terrier (westhighland)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/wheaten"
            >
              terrier (wheaten)
            </a>
            <a
              class="hover:underline"
              href="/breeds/terrier/yorkshire"
            >
              terrier (yorkshire)
            </a>
            <a
              class="hover:underline"
              href="/breeds/vizsla"
            >
              vizsla
            </a>
            <a
              class="hover:underline"
              href="/breeds/waterdog"
            >
              waterdog
            </a>
            <a
              class="hover:underline"
              href="/breeds/waterdog/spanish"
            >
              waterdog (spanish)
            </a>
            <a
              class="hover:underline"
              href="/breeds/weimaraner"
            >
              weimaraner
            </a>
            <a
              class="hover:underline"
              href="/breeds/whippet"
            >
              whippet
            </a>
            <a
              class="hover:underline"
              href="/breeds/wolfhound"
            >
              wolfhound
            </a>
            <a
              class="hover:underline"
              href="/breeds/wolfhound/irish"
            >
              wolfhound (irish)
            </a>
          </div>
        </div>
      </DocumentFragment>
    `)
  })

  it('breeds generateGetStaticProps decodes valid data as Right', async () => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        environmentArbitrary(() => fetchReturnSuccess(defaultAllBreedsSuccess)),
        getStaticPropsContextArbitrary(),
        async (r, context) => {
          const staticProps = await generateGetStaticProps(r)(context)

          const isValid = fp.either.isRight(staticProps.props.allBreeds)

          expect(isValid).toBe(true)

          return isValid
        },
      ),
    )
  })

  it('breeds generateGetStaticProps decodes valid data as Left', async () => {
    expect.hasAssertions()

    await fc.assert(
      fc.asyncProperty(
        environmentArbitrary(() => fetchReturnFailure('failure')),
        getStaticPropsContextArbitrary(),
        async (r, context) => {
          const staticProps = await generateGetStaticProps(r)(context)

          const isInvalid = fp.either.isLeft(staticProps.props.allBreeds)

          expect(isInvalid).toBe(true)

          return isInvalid
        },
      ),
    )
  })
})
