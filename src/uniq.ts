export function uniq<T>(this: T[]): T[] {
  let seen = new Set
  let result: T[] = []
  this.forEach(item => {
    if (!seen.has(item)) {
      result.push(item)
      seen.add(item)
    }
  })
  return result
}
