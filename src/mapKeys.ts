export function mapKeys<T extends object, U extends keyof T, V>(
  this: T,
  fn: (key: U, value: T[U], object: T) => V
): { [key: string]: T[U] } {
  let result: any = {}
  this.forEach((item, key) => result[fn(key as U, item, this)] = item)
  return result
}
