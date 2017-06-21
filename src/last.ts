export function last<T>(this: T[]): T | undefined {
  return this[this.length - 1]
}
