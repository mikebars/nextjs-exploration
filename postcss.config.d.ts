import * as PostCSS from 'postcss'

export type PostCSSConfig = {
  from?: PostCSS.ProcessOptions['from'] | string
  map?: PostCSS.ProcessOptions['map'] | string
  parser?: PostCSS.ProcessOptions['parser'] | string
  plugins?:
    | Array<PostCSS.AcceptedPlugin>
    | Array<string | [string, Record<string, unknown> | false | null]>
    | Record<string, Record<string, unknown> | false | null>
  stringifier?: PostCSS.ProcessOptions['stringifier'] | string
  syntax?: PostCSS.ProcessOptions['syntax'] | string
  to?: PostCSS.ProcessOptions['to'] | string
}
