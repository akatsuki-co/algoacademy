## Hash Tables

---

A hash table is a data structure that maps keys to values.

In JS, objects are typically used to represent hash tables. ES6 also provides a new collection type called Maps that can also function as hash tables. We will show you both methods.

---

```js
let obj = {}

// Adding a key, value pair into a object
obj['a'] = 98 // bracket notation
obj.b = 99 // dot notation
console.log(obj) // { a: 98, b: 99 }

// Deleting a key
delete obj.b
console.log(obj) // { a: 98 }

let arr = [
  ['b', 99],
  ['c', 100],
  ['d', 101],
]
arr.forEach(([k, v]) => (obj[k] = v))

// Looping over an object
for (let [key, val] of Object.entries(obj)) {
  console.log(`${key}=${val}`)
}
/*
a=98
b=99
c=100
d=101
*/
```

---

## Maps

- Maps preserve insertion order.

---

```js
// Initializing a new Map
let map = new Map()

// Adding a key, value pair into a Map
map.set('a', 98)
console.log(map) // Map { 'a' => 98 }

// The add method is chainable
map.set('b', 99).set('c', 100).set('d', 101)
console.log(map) // Map { 'a' => 98, 'b' => 99, 'c' => 100, 'd' => 101 }

// Check if map has an item
console.log(map.has('a')) // true
console.log(map.has('e')) // false

// Get size of map
console.log(map.size) // 4

// Delete a key
map.delete('d')
console.log(map) // Map { 'a' => 98, 'b' => 99, 'c' => 100 }

// Delete all keys
map.clear()
console.log(map) // Map {}

// Create a map from an iterable
let map = new Map([
  ['a', 98],
  ['b', 99],
  ['c', 100],
])
console.log(map) // Map { 'a' => 98, 'b' => 99, 'c' => 100 }

// Loop through a map
for (let [key, val] of map.entries()) {
  console.log(`${key}=${val}`)
}
/*
a=98
b=99
c=100
*/
```

---

### Create a counter

---

```js
let word = 'alphabet'
let counter = word.split('').reduce((obj, char) => {
  obj[char] = char in obj ? ++obj[char] : 1
  return obj
}, {})
console.log(counter) // { a: 2, l: 1, p: 1, h: 1, b: 1, e: 1, t: 1 }
```

---

_Author: Tu Vo_
