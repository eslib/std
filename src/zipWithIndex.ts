export function zipWithIndex<T>(this: T[]): [T, number][] {
  return this.map((item, n) => [item, n]) as [T, number][]
}
