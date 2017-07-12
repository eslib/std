import '../../src'
import test from 'ava'

test('entries', t => t.deepEqual(
  { a: 1, b: 2, c: 3 }.entries(),
  [['a', 1], ['b', 2], ['c', 3]]
))
