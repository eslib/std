import '../../src'
import test from 'ava'

test('drop', t => t.deepEqual([1, 2, 3].drop(1), [2, 3]))
