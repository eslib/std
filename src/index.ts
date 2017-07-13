import { assign } from 'eslib'
import { drop } from './drop'
import { entries } from './entries'
import { flatten } from './flatten'
import { flatMap } from './flatMap'
import { fromPairs } from './fromPairs'
import { head } from './head'
import { last } from './last'
import { remove } from './remove'
import { tail } from './tail'
import { uniq } from './uniq'
import { zipObject } from './zipObject'
import { zip } from './zip'
import { unzip } from './unzip'
import { forEach } from './forEach'
import { invert } from './invert'
import { mapKeys } from './mapKeys'
import { mapValues } from './mapValues'
import { omit } from './omit'
import { pick } from './pick'
import { zipWithIndex } from './zipWithIndex'

const SOURCE = '<%= name %>'
const VERSION = '<%= version %>'

export type Shallow<T> = T | T[]

export type Deep<T> = T | T[] | T[][] | T[][][] | T[][][][] | T[][][][][]
  | T[][][][][][] | T[][][][][][][] | T[][][][][][][][] | T[][][][][][][][][]
  | T[][][][][][][][][][] | T[][][][][][][][][][][] | T[][][][][][][][][][][][]

declare global {
  interface Array<T> {
    drop: typeof drop
    flatten: typeof flatten
    flatMap: typeof flatMap
    fromPairs: typeof fromPairs
    head: typeof head
    last: typeof last
    remove: typeof remove
    tail: typeof tail
    uniq: typeof uniq
    unzip: typeof unzip
    zip: typeof zip
    zipObject: typeof zipObject
    zipWithIndex: typeof zipWithIndex
  }
  interface Object {
    entries: typeof entries
    forEach: typeof forEach
    invert: typeof invert
    mapKeys: typeof mapKeys
    mapValues: typeof mapValues
    omit: typeof omit
    pick: typeof pick
  }
}

// const extensions: Record<string, string[]> = {
//   Object: ['findKey', 'invert', 'mapKeys', 'mapValues', 'merge', 'omit', 'pick', 'toPairs', 'forEach']
// }

let arrayFns = [drop, flatten, flatMap, fromPairs, head, last, remove, tail, uniq, unzip, zip, zipObject, zipWithIndex]
arrayFns.forEach(fn =>
  assign(Array.prototype, { [fn.name]: fn }, SOURCE, VERSION)
)

let objectFns = [entries, forEach, invert, mapKeys, mapValues, omit, pick]
objectFns.forEach(fn =>
  assign(Object.prototype, { [fn.name]: fn }, SOURCE, VERSION)
)
