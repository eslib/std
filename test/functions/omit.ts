import '../../src'
import test from 'ava'

test('omit', t => t.deepEqual(
  { a: 1, b: 2, c: 3 }.omit('a'),
  { b: 2, c: 3 }
))
