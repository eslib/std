import '../../src'
import test from 'ava'

test('pick', t => t.deepEqual(
  { a: 1, b: 2, c: 3 }.pick('a', 'b'),
  { a: 1, b: 2 }
))
