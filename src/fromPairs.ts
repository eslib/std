
export function fromPairs<T extends string | number, U>(
  this: [T, U][]
): Record<string, U> {
  let result: Record<string, U> = {} as any
  this.forEach(item =>
    result[String(item[0])] = item[1]
  )
  return result
}

// export function fromPairs<
//   V extends object,
//   K extends keyof V
// >(this: [K, V[K]][]): { [k in K]: V[K] } {
//   let result: { [k in K]: V[K] } = {} as any
//   this.forEach(item =>
//     result[item[0]] = item[1]
//   )
//   return result
// }
