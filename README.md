<img src="logo.png" alt="ESlib-Std" width="450px" />

[![Build Status][build]](https://circleci.com/gh/eslib/std) [![npm]](https://www.npmjs.com/package/@eslib/std) [![mit]](https://opensource.org/licenses/MIT)

[build]: https://img.shields.io/circleci/project/eslib/std.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/@eslib/std.svg?style=flat-square
[mit]: https://img.shields.io/npm/l/@eslib/std.svg?style=flat-square

> The compact, well typed standard library for ESlib

## Installation

```sh
npm install @eslib/std --save
```

## Example

```ts
import '@eslib/std'

[1, 2, 3, 4]
  .drop(1)                // [2, 3, 4]
  .zip(5, 6, 7)           // [[2, 5], [3, 6], [4, 7]]
  .fromPairs()            // { 2: 5, 3: 6, 4: 7 }
  .mapValues(_ => _ * 2)  // { 2: 10, 3: 12, 4: 14 }
  .omit('2', '3')         // { 4: 14 }
  .invert()               // { 14: 4 }
```

## Building It

```sh
npm run build
```

## Tests

```sh
npm test
```

## License

MIT