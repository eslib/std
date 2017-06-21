export function zip<T, U>(this: T[], ...array: U[]): [T, U][] {
  return this.map((item, n) => [item, array[n]]) as [T, U][]
}
