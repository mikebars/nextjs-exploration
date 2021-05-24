import * as Babel from '@babel/core'
import * as NextConstants from 'next/dist/next-server/lib/constants'
import * as Sass from 'sass'
import * as Webpack from 'webpack'
import * as WebpackDevMiddleware from 'webpack-dev-middleware'

type DefaultNextExportPathMap = Record<
  string,
  {
    page: string
    query?: Record<string, string>
  }
>

export type DefaultNextConfig = {
  amp?: {
    canonicalBase?: string

    skipValidation?: boolean

    validator?: string
  }

  analyticsId?: string

  assetPrefix?: string

  basePath?: string

  compress?: boolean

  configOrigin?: string

  devIndicators?: {
    buildActivity: boolean
  }

  distDir?: string

  env?: Record<string, unknown>

  experimental?: {
    cpus?: number

    optimizeCss?: boolean

    optimizeImages?: boolean

    pageEnv?: boolean

    plugins?: boolean

    productionBrowserSourceMaps?: boolean

    profiling?: boolean

    reactMode?: string

    scriptLoader?: boolean

    scrollRestoration?: boolean

    sprFlushToDisk?: boolean

    workerThreads?: boolean
  }

  exportPathMap?: (
    defaultPathMap: DefaultNextExportPathMap,
    options: {
      buildId: string
      dev: boolean
      dir: string
      distDir: string
      outDir: string
    },
  ) => DefaultNextExportPathMap

  future?: {
    excludeDefaultMomentLocales?: boolean
    strictPostcssConfiguration?: boolean
    webpack5?: boolean
  }

  generateBuildId?: () => Promise<string>

  generateEtags?: boolean

  headers?: () => Promise<
    Array<{
      basePath?: false

      headers: Array<{
        key: string
        value: string
      }>

      locale?: false

      source: string
    }>
  >

  i18n?: {
    defaultLocale: string

    domains?: Array<{
      defaultLocale: string

      domain: string

      http?: true

      locales?: Array<string>
    }>

    localeDetection?: false

    locales: Array<string>
  }

  images?: {
    deviceSizes: Array<number>

    domains?: Array<string>

    imageSizes: Array<number>

    loader: 'default' | 'akamai' | 'cloudinary' | 'imgix'

    path: string
  }

  onDemandEntries?: {
    maxInactiveAge: number

    pagesBufferLength: number
  }

  pageExtensions?: Array<string>

  poweredByHeader?: boolean

  productionBrowserSourceMaps?: boolean

  publicRuntimeConfig?: Record<string, unknown>

  reactStrictMode?: boolean

  redirects?: () => Promise<
    Array<{
      basePath?: false

      destination: string

      locale?: false

      permanent?: boolean

      source: string

      statusCode?: number
    }>
  >

  rewrites?: () => Promise<
    Array<{
      basePath?: false

      destination: string

      locale?: false

      source: string
    }>
  >

  sassOptions?: Sass.Options

  serverRuntimeConfig?: Record<string, unknown>

  target?: 'server' | 'serverless'

  trailingSlash?: boolean

  typescript?: {
    ignoreBuildErrors?: boolean
  }

  useFileSystemPublicRoutes?: boolean

  webpack?: (
    config: Webpack.Configuration,
    options: {
      buildId: string

      defaultLoaders: {
        babel: Webpack.RuleSetUseItem & {
          options: Babel.TransformOptions & {
            cacheCompression?: boolean

            cacheDirectory?: boolean

            cacheIdentifier?: string

            customize?: string | null

            metadataSubscribers?: Array<string>
          } & {
            babelPresetPlugins: Array<{
              config: Babel.TransformOptions

              dir: string
            }>

            development: boolean

            hasJsxRuntime: boolean

            hasReactRefresh: boolean

            isServer: boolean

            pagesDir: string
          }
        }
      }
      dev: boolean

      isServer: boolean
    },
  ) => Webpack.Configuration

  webpackDevMiddleware?: (
    config: WebpackDevMiddleware.Options,
  ) => WebpackDevMiddleware.Options
}

export type NextConfig =
  | DefaultNextConfig
  | ((
      phase:
        | typeof NextConstants.PHASE_DEVELOPMENT_SERVER
        | typeof NextConstants.PHASE_EXPORT
        | typeof NextConstants.PHASE_PRODUCTION_BUILD
        | typeof NextConstants.PHASE_PRODUCTION_SERVER,
      options: {
        defaultConfig: DefaultNextConfig
      },
    ) => DefaultNextConfig)
