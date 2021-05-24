import * as CSSType from 'csstype'
import * as PostCSS from 'postcss'
import * as tstb from 'ts-toolbelt'

/* eslint-disable no-magic-numbers */
/* tslint:disable: no-magic-numbers */

type DeepValues<O extends Record<number | string | symbol, unknown>> =
  O extends Record<number | string | symbol, infer V>
    ? V extends Record<number | string | symbol, unknown>
      ? DeepValues<V>
      : V
    : {
        [K in keyof O]: O[K] extends Record<number | string | symbol, unknown>
          ? DeepValues<O[K]>
          : O[K]
      }[keyof O]

type CSSAbsoluteLengthUnit =
  // Centimeters (1cm = 96px/2.54)
  | 'cm'
  // Inches (1in = 2.54cm = 96px)
  | 'in'
  // Millimeters (1mm = 1/10th of 1cm)
  | 'mm'
  // Picas (1pc = 1/6th of 1in)
  | 'pc'
  // Points (1pt = 1/72th of 1in)
  | 'pt'
  // Pixels (1px = 1/96th of 1in)
  | 'px'
  // Quarter-millimeters (1Q = 1/40th of 1cm)
  | 'Q'

type CSSRelativeLengthUnit =
  // The advance measure (width) of the glyph "0" of the element's font.
  | 'ch'
  // Font size of the parent, in the case of typographical properties like font-size, and font size of the element itself, in the case of other properties like width.
  | 'em'
  // X-height of the element's font.
  | 'ex'
  // Line height of the element.
  | 'lh'
  // Font size of the root element.
  | 'rem'
  // 1% of the viewport's height.
  | 'vh'
  // 1% of the viewport's larger dimension.
  | 'vmax'
  // 1% of the viewport's smaller dimension.
  | 'vmin'
  // 1% of the viewport's width.
  | 'vw'

type CSSLengthUnit = CSSAbsoluteLengthUnit | CSSRelativeLengthUnit

type CSSLength = `${number}${CSSLengthUnit | '%'}` | '0'

type CSSNamedColor =
  | 'aliceblue'
  | 'antiquewhite'
  | 'aqua'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'black'
  | 'blanchedalmond'
  | 'blue'
  | 'blueviolet'
  | 'brown'
  | 'burlywood'
  | 'cadetblue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerblue'
  | 'cornsilk'
  | 'crimson'
  | 'cyan'
  | 'darkblue'
  | 'darkcyan'
  | 'darkgoldenrod'
  | 'darkgray'
  | 'darkgreen'
  | 'darkgrey'
  | 'darkkhaki'
  | 'darkmagenta'
  | 'darkolivegreen'
  | 'darkorange'
  | 'darkorchid'
  | 'darkred'
  | 'darksalmon'
  | 'darkseagreen'
  | 'darkslateblue'
  | 'darkslategray'
  | 'darkslategrey'
  | 'darkturquoise'
  | 'darkviolet'
  | 'deeppink'
  | 'deepskyblue'
  | 'dimgray'
  | 'dimgrey'
  | 'dodgerblue'
  | 'firebrick'
  | 'floralwhite'
  | 'forestgreen'
  | 'fuchsia'
  | 'gainsboro'
  | 'ghostwhite'
  | 'gold'
  | 'goldenrod'
  | 'gray'
  | 'green'
  | 'greenyellow'
  | 'grey'
  | 'honeydew'
  | 'hotpink'
  | 'indianred'
  | 'indigo'
  | 'ivory'
  | 'khaki'
  | 'lavender'
  | 'lavenderblush'
  | 'lawngreen'
  | 'lemonchiffon'
  | 'lightblue'
  | 'lightcoral'
  | 'lightcyan'
  | 'lightgoldenrodyellow'
  | 'lightgray'
  | 'lightgreen'
  | 'lightgrey'
  | 'lightpink'
  | 'lightsalmon'
  | 'lightseagreen'
  | 'lightskyblue'
  | 'lightslategray'
  | 'lightslategrey'
  | 'lightsteelblue'
  | 'lightyellow'
  | 'lime'
  | 'limegreen'
  | 'linen'
  | 'magenta'
  | 'maroon'
  | 'mediumaquamarine'
  | 'mediumblue'
  | 'mediumorchid'
  | 'mediumpurple'
  | 'mediumseagreen'
  | 'mediumslateblue'
  | 'mediumspringgreen'
  | 'mediumturquoise'
  | 'mediumvioletred'
  | 'midnightblue'
  | 'mintcream'
  | 'mistyrose'
  | 'moccasin'
  | 'navajowhite'
  | 'navy'
  | 'oldlace'
  | 'olive'
  | 'olivedrab'
  | 'orange'
  | 'orangered'
  | 'orchid'
  | 'palegoldenrod'
  | 'palegreen'
  | 'paleturquoise'
  | 'palevioletred'
  | 'papayawhip'
  | 'peachpuff'
  | 'peru'
  | 'pink'
  | 'plum'
  | 'powderblue'
  | 'purple'
  | 'rebeccapurple'
  | 'red'
  | 'rosybrown'
  | 'royalblue'
  | 'saddlebrown'
  | 'salmon'
  | 'sandybrown'
  | 'seagreen'
  | 'seashell'
  | 'sienna'
  | 'silver'
  | 'skyblue'
  | 'slateblue'
  | 'slategray'
  | 'slategrey'
  | 'snow'
  | 'springgreen'
  | 'steelblue'
  | 'tan'
  | 'teal'
  | 'thistle'
  | 'tomato'
  | 'transparent'
  | 'turquoise'
  | 'violet'
  | 'wheat'
  | 'white'
  | 'whitesmoke'
  | 'yellow'
  | 'yellowgreen'

type CSSHexCodeColor = `#${number | string}`

type CSSHSLColor = `hsl(${number | string}, ${number | string}, ${
  | number
  | string})`

type CSSHSLAColor = `hsla(${number | string}, ${number | string}, ${
  | number
  | string}, ${number | string})`

type CSSRGBColor = `rgb(${number | string}, ${number | string}, ${
  | number
  | string})`

type CSSColor =
  | CSSType.Globals
  | 'currentcolor'
  | CSSNamedColor
  | CSSHexCodeColor
  | CSSHSLColor
  | CSSHSLAColor
  | CSSRGBColor

type CSSInJS = Partial<CSSType.Properties & CSSType.PropertiesHyphen>

type TailwindColorVariant =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900

type TailwindCorePlugin =
  // The sr-only and not-sr-only utilities.
  | 'accessibility'
  // The align-content utilities like content-end.
  | 'alignContent'
  // The align-items utilities like items-center.
  | 'alignItems'
  // The align-self utilities like self-end.
  | 'alignSelf'
  // The animation utilities like animate-none.
  | 'animation'
  // The appearance utilities like appearance-none.
  | 'appearance'
  // The background-attachment utilities like bg-local.
  | 'backgroundAttachment'
  // The background-clip utilities like bg-clip-padding.
  | 'backgroundClip'
  // The background-color utilities like bg-green-700.
  | 'backgroundColor'
  // The background-image utilities like bg-gradient-to-br.
  | 'backgroundImage'
  // The background-color opacity utilities like bg-opacity-25.
  | 'backgroundOpacity'
  // The background-position utilities like bg-left-top.
  | 'backgroundPosition'
  // The background-repeat utilities like bg-repeat-x.
  | 'backgroundRepeat'
  // The background-size utilities like bg-cover.
  | 'backgroundSize'
  // The border-collapse utilities like border-collapse.
  | 'borderCollapse'
  // The border-color utilities like border-green-700.
  | 'borderColor'
  // The border-color opacity utilities like border-opacity-25.
  | 'borderOpacity'
  // The border-radius utilities like rounded-l-3xl.
  | 'borderRadius'
  // The border-style utilities like border-dotted.
  | 'borderStyle'
  // The border-width utilities like border-l-2.
  | 'borderWidth'
  // The box-shadow utilities like shadow-lg.
  | 'boxShadow'
  // The box-sizing utilities like box-border.
  | 'boxSizing'
  // The clear utilities like clear-right.
  | 'clear'
  // The container component.
  | 'container'
  // The cursor utilities like cursor-wait.
  | 'cursor'
  // The display utilities like table-column-group.
  | 'display'
  // The between elements border-color utilities like divide-gray-500.
  | 'divideColor'
  // The divide-opacity utilities like divide-opacity-50.
  | 'divideOpacity'
  // The divide-style utilities like divide-dotted.
  | 'divideStyle'
  // The between elements border-width utilities like divide-x-2.
  | 'divideWidth'
  // The fill utilities like fill-current.
  | 'fill'
  // The flex utilities like flex-auto.
  | 'flex'
  // The flex-direction utilities like flex-row-reverse.
  | 'flexDirection'
  // The flex-grow utilities like flex-grow-0.
  | 'flexGrow'
  // The flex-shrink utilities like flex-shrink-0.
  | 'flexShrink'
  // The flex-wrap utilities like flex-wrap-reverse.
  | 'flexWrap'
  // The float utilities like float-left.
  | 'float'
  // The font-family utilities like font-serif.
  | 'fontFamily'
  // The font-size utilities like text-3xl.
  | 'fontSize'
  // The font-smoothing utilities like antialiased.
  | 'fontSmoothing'
  // The font-style utilities like italic.
  | 'fontStyle'
  // The font-variant-numeric utilities like lining-nums.
  | 'fontVariantNumeric'
  // The font-weight utilities like font-medium.
  | 'fontWeight'
  // The gap utilities like gap-x-28.
  | 'gap'
  // The gradient-color-stops utilities like via-green-700.
  | 'gradientColorStops'
  // The grid-auto-columns utilities like auto-cols-min.
  | 'gridAutoColumns'
  // The grid-auto-flow utilities like grid-flow-col.
  | 'gridAutoFlow'
  // The grid-auto-rows utilities like auto-rows-min.
  | 'gridAutoRows'
  // The grid-column utilities like col-span-6.
  | 'gridColumn'
  // The grid-column-end utilities like col-end-7.
  | 'gridColumnEnd'
  // The grid-column-start utilities like col-start-7.
  | 'gridColumnStart'
  // The grid-row utilities like row-span-3.
  | 'gridRow'
  // The grid-row-end utilities like row-end-4.
  | 'gridRowEnd'
  // The grid-row-start utilities like row-start-4.
  | 'gridRowStart'
  // The grid-template-columns utilities like grid-cols-7.
  | 'gridTemplateColumns'
  // The grid-template-rows utilities like grid-rows-4.
  | 'gridTemplateRows'
  // The height utilities like h-64.
  | 'height'
  // The inset utilities like bottom-10.
  | 'inset'
  // The justify-content utilities like justify-center.
  | 'justifyContent'
  // The justify-items utilities like justify-items-end.
  | 'justifyItems'
  // The justify-self utilities like justify-self-end.
  | 'justifySelf'
  // The letter-spacing utilities like tracking-normal.
  | 'letterSpacing'
  // The line-height utilities like leading-9.
  | 'lineHeight'
  // The list-style-position utilities like list-inside.
  | 'listStylePosition'
  // The list-style-type utilities like list-disc.
  | 'listStyleType'
  // The margin utilities like ml-8.
  | 'margin'
  // The max-height utilities like max-h-32.
  | 'maxHeight'
  // The max-width utilities like max-w-5xl.
  | 'maxWidth'
  // The min-height utilities like min-h-full.
  | 'minHeight'
  // The min-width utilities like min-w-full.
  | 'minWidth'
  // The object-fit utilities like object-fill.
  | 'objectFit'
  // The object-position utilities like object-left-top.
  | 'objectPosition'
  // The opacity utilities like opacity-50.
  | 'opacity'
  // The order utilities like order-8.
  | 'order'
  // The outline utilities like outline-white.
  | 'outline'
  // The overflow utilities like overflow-y-auto.
  | 'overflow'
  // The overscroll-behavior utilities like overscroll-y-contain.
  | 'overscrollBehavior'
  // The padding utilities like pr-4.
  | 'padding'
  // The place-content utilities like place-content-between.
  | 'placeContent'
  // The placeholder color utilities like placeholder-red-600.
  | 'placeholderColor'
  // The placeholder color opacity utilities like placeholder-opacity-25.
  | 'placeholderOpacity'
  // The place-items utilities like place-items-end.
  | 'placeItems'
  // The place-self utilities like place-self-end.
  | 'placeSelf'
  // The pointer-events utilities like pointer-events-none.
  | 'pointerEvents'
  // The position utilities like absolute.
  | 'position'
  // Tailwind's base/reset styles.
  | 'preflight'
  // The resize utilities like resize-y.
  | 'resize'
  // The ring-color utilities like ring-green-700.
  | 'ringColor'
  // The ring-offset-color utilities like ring-offset-green-700.
  | 'ringOffsetColor'
  // The ring-offset-width utilities like ring-offset-2.
  | 'ringOffsetWidth'
  // The ring-opacity utilities like ring-opacity-50.
  | 'ringOpacity'
  // The ring-width utilities like ring-2.
  | 'ringWidth'
  // The rotate utilities like rotate-180.
  | 'rotate'
  // The scale utilities like scale-x-95.
  | 'scale'
  // The skew utilities like -skew-x-1.
  | 'skew'
  // The "space-between" utilities like space-x-4.
  | 'space'
  // The stroke utilities like stroke-current.
  | 'stroke'
  // The stroke-width utilities like stroke-1.
  | 'strokeWidth'
  // The table-layout utilities like table-auto.
  | 'tableLayout'
  // The text-align utilities like text-center.
  | 'textAlign'
  // The text-color utilities like text-green-700.
  | 'textColor'
  // The text-decoration utilities like line-through.
  | 'textDecoration'
  // The text-opacity utilities like text-opacity-50.
  | 'textOpacity'
  // The text-overflow utilities like overflow-ellipsis.
  | 'textOverflow'
  // The text-transform utilities like lowercase.
  | 'textTransform'
  // The transform utility (for enabling transform features).
  | 'transform'
  // The transform-origin utilities like origin-bottom-right.
  | 'transformOrigin'
  // The transition-delay utilities like delay-200.
  | 'transitionDelay'
  // The transition-duration utilities like duration-200.
  | 'transitionDuration'
  // The transition-property utilities like transition-colors.
  | 'transitionProperty'
  // The transition-timing-function utilities like ease-in.
  | 'transitionTimingFunction'
  // The translate utilities like -translate-x-full.
  | 'translate'
  // The user-select utilities like select-text.
  | 'userSelect'
  // The vertical-align utilities like align-middle.
  | 'verticalAlign'
  // The visibility utilities like visible.
  | 'visibility'
  // The whitespace utilities like whitespace-pre.
  | 'whitespace'
  // The width utilities like w-0.5.
  | 'width'
  // The word-break utilities like break-words.
  | 'wordBreak'
  // The z-index utilities like z-30.
  | 'zIndex'

type TailwindPluginHandler = (handlerHelperFunctions: {
  addBase: (baseStyle: TailwindStyle) => void
  addComponents: (componentsStyle: TailwindStyle) => void
  addUtilities: (
    utilitiesStyle: TailwindStyle,
    options?:
      | {
          respectImportant?: boolean
          respectPrefix?: boolean
          variants?: Array<TailwindVariant>
        }
      | Array<TailwindVariant>,
  ) => void
  addVariant: (
    variant: string,
    helperFunctions: {
      container: PostCSS.Container
      modifySelectors: (params: {
        className: string
        selector: string
      }) => string
      separator: string
    },
  ) => void
  config: (configProperty: string) => DeepValues<Required<TailwindConfig>>
  e: (unescapedString: string) => string
  postcss: PostCSS.Postcss
  prefix: (unprefixedString: string) => string
  theme: (
    themeProperty: string,
  ) => DeepValues<Required<TailwindConfig>['theme']>
  variants: (
    variantsProperty: string,
  ) => DeepValues<Required<TailwindConfig>['variants']>
}) => void

type TailwindPlugin =
  | {
      config: TailwindConfig
      handler: TailwindPluginHandler
    }
  | {
      __configFunction: (options: Record<string, unknown>) => TailwindConfig
      __isOptionsFunction: true
      __options: Record<string, unknown>
      __pluginFunction: (
        options: Record<string, unknown>,
      ) => TailwindPluginHandler
      config: TailwindConfig
      handler: TailwindPluginHandler
    }

type TailwindScreen =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | `${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}xl`

type TailwindScreenRange = tstb.Object.AtLeast<
  {
    max: CSSLength
    min: CSSLength
  },
  'max' | 'min'
>

type TailwindSpacing =
  // Default value: 0px, 0px
  | 0
  // Default value: 1px, 1px
  | 'px'
  // Default value: 0.125rem, 2px
  | 0.5
  // Default value: 0.25rem, 4px
  | 1
  // Default value: 0.375rem, 6px
  | 1.5
  // Default value: 0.5rem, 8px
  | 2
  // Default value: 0.625rem, 10px
  | 2.5
  // Default value: 0.75rem, 12px
  | 3
  // Default value: 0.875rem, 14px
  | 3.5
  // Default value: 1rem, 16px
  | 4
  // Default value: 1.25rem, 20px
  | 5
  // Default value: 1.5rem, 24px
  | 6
  // Default value: 1.75rem, 28px
  | 7
  // Default value: 2rem, 32px
  | 8
  // Default value: 2.25rem, 36px
  | 9
  // Default value: 2.5rem, 40px
  | 10
  // Default value: 2.75rem, 44px
  | 11
  // Default value: 3rem, 48px
  | 12
  // Default value: 3.5rem, 56px
  | 14
  // Default value: 4rem, 64px
  | 16
  // Default value: 5rem, 80px
  | 20
  // Default value: 6rem, 96px
  | 24
  // Default value: 7rem, 112px
  | 28
  // Default value: 8rem, 128px
  | 32
  // Default value: 9rem, 144px
  | 36
  // Default value: 10rem, 160px
  | 40
  // Default value: 11rem, 176px
  | 44
  // Default value: 12rem, 192px
  | 48
  // Default value: 13rem, 208px
  | 52
  // Default value: 14rem, 224px
  | 56
  // Default value: 15rem, 240px
  | 60
  // Default value: 16rem, 256px
  | 64
  // Default value: 18rem, 288px
  | 72
  // Default value: 20rem, 320px
  | 80
  // Default value: 24rem, 384px
  | 96

type TailwindStyle = Record<
  keyof HTMLElementTagNameMap | `${'.' | '#'}${string}`,
  CSSInJS & Record<`&:${TailwindVariant}`, CSSInJS>
>

type TailwindThemeBreakpointsFunction = <
  O extends Record<number | string | symbol, unknown>,
>(
  o: O,
) => {
  [K in keyof O as `screen-${K & string}`]: O[K]
}

type TailwindThemeNegativeFunction = <
  O extends Record<number | string | symbol, unknown>,
>(
  o: O,
) => {
  [K in keyof O as `-${K & string}`]: O[K]
}

type TailwindThemeProperty = Partial<
  Record<'DEFAULT', unknown> & Record<string, unknown>
>

type TailwindTheme = Partial<
  {
    colors?: Partial<
      Record<
        CSSNamedColor | 'current',
        | CSSColor
        | 'currentColor'
        | Record<TailwindColorVariant, CSSColor | 'currentColor'>
      >
    >
    screens?: Partial<
      Record<
        TailwindScreen,
        CSSLength | TailwindScreenRange | Array<TailwindScreenRange>
      >
    >
    spacing?: Partial<Record<TailwindSpacing, CSSLength>>
  } & Record<
    TailwindCorePlugin,
    | TailwindThemeProperty
    | ((
        theme: <K, DV>(
          key: K,
          defaultValue?: DV,
        ) => K extends `${infer K1}.${infer K2}.${infer K3}`
          ? K1 extends keyof TailwindTheme
            ? K2 extends keyof TailwindTheme[K1]
              ? K3 extends keyof TailwindTheme[K1][K2]
                ? TailwindTheme[K1][K2][K3]
                : DV
              : DV
            : DV
          : K extends `${infer K1}.${infer K2}`
          ? K1 extends keyof TailwindTheme
            ? K2 extends keyof TailwindTheme[K1]
              ? TailwindTheme[K1][K2]
              : DV
            : DV
          : K extends keyof TailwindTheme
          ? TailwindTheme[K]
          : DV,
        helperFunctions: {
          breakpoints: TailwindThemeBreakpointsFunction
          negative: TailwindThemeNegativeFunction
        },
      ) => TailwindThemeProperty)
  >
>

// In order from lowest priority to highest priority.
type TailwindVariant =
  // Responsive variants like sm, md, lg, and xl.
  | 'responsive'
  // Targets dark mode.
  | 'dark'
  // Targets the prefers-reduced-motion: no-preference media query.
  | 'safe'
  // Targets the prefers-reduced-motion: reduce media query.
  | 'reduce'
  // Targets the first-child pseudo-class.
  | 'first'
  // Targets the last-child pseudo-class.
  | 'last'
  // Targets the odd-child pseudo-class.
  | 'odd'
  // Targets the even-child pseudo-class.
  | 'even'
  // Targets the visited pseudo-class.
  | 'visited'
  // Targets the checked pseudo-class.
  | 'checked'
  // Targets an element when a marked parent matches the hover pseudo-class.
  | 'group-hover'
  // Targets an element when a marked parent matches the focus pseudo-class.
  | 'group-focus'
  // Targets the focus-within pseudo-class.
  | 'focus-within'
  // Targets the hover pseudo-class.
  | 'hover'
  // Targets the focus pseudo-class.
  | 'focus'
  // Targets the focus-visible pseudo-class.
  | 'focus-visible'
  // Targets the active pseudo-class.
  | 'active'
  // Targets the disabled pseudo-class.
  | 'disabled'

type TailwindVariants = Partial<
  Record<TailwindCorePlugin, Array<TailwindVariant>>
>

export type TailwindConfig = {
  corePlugins?: Array<TailwindCorePlugin> | Record<TailwindCorePlugin, false>
  darkMode?: 'class' | 'media' | false
  important?: `#${string}` | true
  plugins?: Array<TailwindPlugin>
  presets?: Array<TailwindConfig>
  purge?: Array<string>
  separator?: string
  theme?: TailwindTheme & { extend?: TailwindTheme }
  variantOrder?: Array<TailwindVariant>
  variants?: TailwindVariants & { extend?: TailwindVariants }
}

/* tslint:enable no-magic-numbers */
/* eslint-enable no-magic-numbers */
