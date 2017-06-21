import { Shallow } from './'

export function flatMap<T, U>(
  this: Shallow<T>[],
  fn: (value: Shallow<T>, index: number, array: Shallow<T>[]) => U
): U[] {
  return this.map(fn).flatten()
}
