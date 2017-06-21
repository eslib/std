export function remove<T>(this: T[], ...values: T[]): T[] {
  let set = new Set(values)
  return this.filter(_ => !set.has(_))
}
