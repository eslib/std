export function unzip<T, U>(this: [T, U][]): [T[], U[]] {
  let ts: T[] = []
  let us: U[] = []
  this.forEach(([t, u]) => {
    ts.push(t)
    us.push(u)
  })
  return [ts, us]
}
