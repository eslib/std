import '../../src'
import test from 'ava'

test('head', t => t.deepEqual([1, 2, 3].head(), 1))
