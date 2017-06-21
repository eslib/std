export function drop<T>(this: T[], n: number): T[] {
  return this.slice(n)
}
