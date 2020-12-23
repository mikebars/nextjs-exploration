export type ErrorsMap = <E extends Array<Error>>(u: Array<unknown>) => E

export const errorsMap: ErrorsMap = <E extends Array<Error>>(
  u: Array<unknown>,
): E => u.flatMap(errorsOf) as E

export type ErrorsOf = <E extends Array<Error>>(u: unknown) => E

export const errorsOf: ErrorsOf = <E extends Array<Error>>(u: unknown): E =>
  Array.of(new Error(String(u))) as E
