import '../../src'
import test from 'ava'

test('mapValues', t => t.deepEqual(
  { a: 1, b: 2, c: 3 }.mapValues(_ => _ + 1),
  { a: 2, b: 3, c: 4 }
))
