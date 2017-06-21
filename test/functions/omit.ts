import '../../src'
import test from 'ava'

test('omit', t => t.deepEqual(
  { a: 1, b: 2, c: 3 }.omit('a'),
  { a: 2, b: 3, c: 4 }
))
