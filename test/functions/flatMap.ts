import '../../src'
import test from 'ava'

test('flatMap', t => t.deepEqual(
  [1, 2, [3]].flatMap(_ => Array.isArray(_) ? -1 : _ + 10),
  [11, 12, -1]
))
