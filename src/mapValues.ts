export function mapValues<T extends object, U extends keyof T, V>(
  this: T,
  fn: (value: T[U], key: U, object: T) => V
): object & Object & { [K in U]: V } {
  let result: any = {}
  this.forEach((item, key) => result[key] = fn(item, key as U, this))
  return result
}
