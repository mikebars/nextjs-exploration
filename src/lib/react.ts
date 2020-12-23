export type ClassNameProps = {
  classNameProp?: string
}

export type ConcatClassName = (
  classNameProp: string | undefined,
  defaultClassName: string,
) => string

export const concatClassName: ConcatClassName = (
  classNameProp: string | undefined,
  defaultClassName: string,
): string =>
  typeof classNameProp === 'string'
    ? `${classNameProp} ${defaultClassName}`
    : defaultClassName

export type EmptyProps = Record<string, unknown>
