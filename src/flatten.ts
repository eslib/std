import { Shallow } from './'

export function flatten<T>(this: Shallow<T>[]): T[] {
  let result: T[] = []
  this.forEach(i => {
    if (Array.isArray(i)) {
      result = result.concat(i)
    } else {
      result.push(i)
    }
  })
  return result
}
