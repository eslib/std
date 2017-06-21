import '../../src'
import test from 'ava'

test('flatten', t => t.deepEqual([1, [2, [3]]].flatten(), [1, 2, [3]]))
