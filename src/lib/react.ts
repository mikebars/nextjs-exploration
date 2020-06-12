export type ClassNameProps = {
  className?: string
}

export const concatClassName = (
  className: string | undefined,
  defaultClassName: string,
): string =>
  typeof className === 'string'
    ? `${className} ${defaultClassName}`
    : defaultClassName
