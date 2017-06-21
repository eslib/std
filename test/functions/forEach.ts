import '../../src'
import test from 'ava'

test('forEach', t => {
  let a = { a: 1, b: 2, c: 3 }
  let b: any = {}
  a.forEach((v, k) => b[k] = v)
  t.deepEqual(a, b)
})
