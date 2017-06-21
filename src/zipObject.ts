export function zipObject<T extends string, U>(this: T[], array: U[]): Record<T, U> {
  let result: Record<T, U> = {} as any
  this.forEach((item, n) => result[item] = array[n])
  return result
}
