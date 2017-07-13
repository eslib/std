import '../../src'
import test from 'ava'

test('mapKeys', t => t.deepEqual(
  { a: 1, b: 2, c: 3 }.mapKeys(_ => _ + 'z'),
  { az: 1, bz: 2, cz: 3 }
))
