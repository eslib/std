export function mapKeys<T extends object, U extends keyof T, V>(
  this: T,
  fn: (key: U, value: T[U], object: T) => V
): {[K in U]: V } {
  let result: {[K in U]: V } = {} as any
  this.forEach((item, key) => result[key] = fn(item, key, this))
  return result
}
