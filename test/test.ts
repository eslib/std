import '../src'
import test from 'ava'

test('mixed (1)', t => {
  let a = [1, 2, 3, 4]
    .drop(1)                // [2, 3, 4]
    .zip(5, 6, 7)           // [[2, 5], [3, 6], [4, 7]]
    .fromPairs()            // { 2: 5, 3: 6, 4: 7 }
    .mapValues(_ => _ * 2)  // { 2: 10, 3: 12, 4: 14 }
    .omit('2', '3')         // { 4: 14 }
    .invert()               // { 14: 4 }
  t.deepEqual(a, { 14: '4' })
})
