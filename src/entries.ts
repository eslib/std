export function entries<T extends object, U extends keyof T>(this: T): [U, T[U]][] {
  let result: [U, T[U]][] = []
  this.forEach((item, key) => result.push([key, item] as [U, T[U]]))
  return result
}
