import '../../src'
import test from 'ava'

test('remove', t => t.deepEqual([1, 2, 3].remove(2, 3), [1]))
