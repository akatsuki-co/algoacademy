## Data Types

---

### Primitive Data Types

Primitives in JS are data values with no additional properties and/or methods.

- String - can be enclosed in single OR double quotes. Template literals are string literals allowing embedded expressions. They are defined within backticks.
- Number - integers and floats both call under this category
- BigInt - new to ECMA 2015, this is for computing beyond `Number.MAX_SAFE_INTEGER`
  - a BigInt is created by appending an `n` to the end of an integer literal or by calling BigInt()
- Boolean - `true` or `false`
- Undefined
- Symbol - a unique and immutable primitive value that may be used as the key of an Object property

---

```js
typeof 'Tu'                // Returns "string"
typeof 2                   // Returns "number"
typeof 9007199254740991n   // Returns "bigint"
typeof true                // Returns "boolean"
typeof Symbol('foo')       // Returns "symbol"
typeof x                   // Returns "undefined" (if x has no value)
```

---

### Null

In Javascript, `null` is 'nothing'. It is something that doesn't exist. The data type of null is an object.

---

### Complex Data

The typeof operator can return one of two complex data types:

- function
- object

Objects, arrays, other collections data types fall under the `object` category.
Functions fall under `functions`.

---

```js
typeof { name: 'Tu', occupation: 'programmer' }  // Returns "object"
typeof [1, 2, 3, 4, 5]                           // Returns "object"
typeof null                                      // Returns "object"
typeof function myFunc() {}                      // Returns "function"
```

---

Functions in JS are first-class objects with the additional capability of being callable.

---

### Indexed collections:

- Arrays - inherits from `Array.prototype`
- TypedArrays - Int8Array, Uint8Array, ....

---

### Keyed collections:

- Maps
- Sets
- WeakMaps
- WeakSets

---

_Author: Tu Vo_
