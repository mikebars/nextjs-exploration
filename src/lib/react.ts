export type ClassNameProps = {
  className?: string
}

export type ConcatClassName = (
  className: string | undefined,
  defaultClassName: string,
) => string

export const concatClassName: ConcatClassName = (
  className: string | undefined,
  defaultClassName: string,
): string =>
  typeof className === 'string'
    ? `${className} ${defaultClassName}`
    : defaultClassName

export type EmptyProps = Record<string, unknown>
