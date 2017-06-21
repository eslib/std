import '../../src'
import test from 'ava'

let as: [string, number][] = [['a', 1], ['b', 2], ['c', 3]]

test('fromPairs', t => t.deepEqual(
  as.fromPairs(),
  { a: 1, b: 2, c: 3 }
))
