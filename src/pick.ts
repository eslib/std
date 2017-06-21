export function pick<T extends object, K extends keyof T>(this: T, ...keys: K[]): Pick<T, K> {
  let result: Pick<T, K> = {} as any
  let set = new Set(keys)
  this.forEach((value, key) => {
    if (set.has(key as K)) {
      result[key] = value
    }
  })
  return result
}
