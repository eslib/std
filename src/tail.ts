export function tail<T>(this: T[]): T[] {
  return this.slice(1)
}
