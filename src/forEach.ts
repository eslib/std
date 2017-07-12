export function forEach<T extends object, K extends keyof T>(
  this: T,
  fn: (value: T[K], key: K, object: T) => void
): void {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      fn.call(this, this[i], i as K, this)
    }
  }
}
