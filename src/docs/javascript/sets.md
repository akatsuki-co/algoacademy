## Sets

---

A set is a data structure that maps keys to values, similarly to a hash table. The difference is that the values in a set can either be true or false.

In JS, there is a built-in Set class.

---

```js
// Initializing a set
let set = new Set()

// Adding values to a set
// Time complexity: O(1)
set.add(1)
set.add(2)
set.add(3)
console.log(set) // Set { 1, 2, 3 }

// Sets can contain mixed data types
set.add("hello")
console.log(set) // Set { 1, 2, 3, 'hello' }

// Check if a set has a key
// Time complexity: O(1)
console.log(set.has(1)) // true
console.log(set.has(5)) // false

// Check size of a set
console.log(set.size) // 4

// Remove a value from a set
// Time complexity: O(1)
set.delete(1)
console.log(set) // Set { 2, 3, 'hello' }
```

---

### Looping over a set

- Traditional for-of loop works, as well as forEach.

---

```js
let set = new Set([1, 2, 3, 1, 4, 3, 5, 2])
console.log(set) // Set { 1, 2, 3, 4, 5 }

for (let item of set) {
  console.log(item) // 1 2 3 4 5
}

set.forEach((el) => console.log(el)) // 1 2 3 4 5
```

---

### Determine the intersection and difference of two sets

```js
let set1 = new Set([1, 2, 3, 4, 5])
let set2 = new Set([2, 4, 6, 8, 10])

let intersection = new Set([...set1].filter((x) => set2.has(x)))
console.log(intersection) // Set { 2, 4 }

let difference = new Set([...set1].filter((x) => !set2.has(x)))
console.log(difference) // Set { 1, 3, 5 }
```

---

_Author: Tu Vo_
