export function invert<T extends string, U extends string>(this: Record<T, U>): Record<U, T> {
  let result: Record<U, T> = {} as any
  this.forEach((item, key) => result[item] = key)
  return result
}
