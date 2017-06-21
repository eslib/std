export function omit<
  T extends object,
  K extends keyof T
>(
  this: T,
  ...keys: K[]
): T & {[k in K]: never } {
  let result: T & {[k in K]: never } = {} as any
  let set = new Set(keys)
  this.forEach((value, key) => {
    if (!set.has(key as K)) {
      result[key] = value
    }
  })
  return result
}
