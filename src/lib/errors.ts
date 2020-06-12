export type Errors = Array<Error>

export const errorsOf: (u: unknown) => Errors = (u) =>
  Array.of(Error(String(u)))
