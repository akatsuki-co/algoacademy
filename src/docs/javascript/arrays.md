## Arrays

---

An array is a data structure that can store multiple values of different types.

- The data is ordered and indexed from 0.

---

### Creating an array

---

```js
let arr = [1, 2, 3]
let arr1 = [1, "2", 3] // arrays can hold mixed data types
let arr2 = new Array(1, 2, 3) // arrays can be initialized with the keyword new
```

---

### Common uses and methods

---

```js
/* Finding the size of an array */
let arr = [1, 2, 3]
console.log(arr.length) // 3

/* Accessing the first element */
let first = arr[0]
console.log(first) // 1

/* Accessing the last element */
let last = arr[arr.length - 1]
console.log(last) // 3

/* Adding an element to the end of an array */
arr.push(4)
console.log(arr) // [1, 2, 3, 4]

/* Removing an element from the end of an array */
arr.pop()
console.log(arr) // [1, 2, 3]

/* Adding an element to the front of an array */
arr.unshift(0)
console.log(arr) // [0, 1, 2, 3]

/* Removing an element from the beginning of an array */
arr.shift()
console.log(arr) // [1, 2, 3]

/* Find the index of an item in an array */
let index = arr.indexOf(2)
console.log(index) // 1
```

---

### Splice

- The splice method can be used to delete OR insert elements into the middle of an array.
- The first argument to splice is the starting index for either deletion or insertion.
- The second argument to splice is the amount of items to delete. In the case of insertion, this argument will be 0.
- The third argument to splice is the item(s) to be inserted. This will be ommitted in the event of a deletion.

---

```js
let arr = [1, 2, 3, 4, 5]
let index = 2
let removed = arr.splice(index, 1)
/* Notice how the return type of splice is an array. */
console.log(removed) // [3]
console.log(arr) // [1, 2, 4, 5]
let result = arr.splice(index, 0, 200)
console.log(result) // []
console.log(arr) // [ 1, 2, 200, 4, 5 ]
```

---

### Initializing an array with values

- Use fill().

---

```js
let arr = new Array(5).fill(0)
console.log(arr) // [ 0, 0, 0, 0, 0 ]

// Be careful when filling with objects
let arr = new Array(5).fill([])
// All the inner arrays will be the same object
arr[0].push(1)
console.log(arr) // [ [ 1 ], [ 1 ], [ 1 ], [ 1 ], [ 1 ] ]
```

---

### Create a shallow copy of an array

- This will only create a copy of the first layer. Any nested elements within arrays will not be fully replicated.

---

```js
let arr = [1, 2, 3]
let arr2 = arr
console.log(arr === arr2) // true, because they both still reference the same object

/* First way - slice */
let shallowCopy = arr.slice()
console.log(shallowCopy) // [1, 2, 3]
console.log(arr === shallowCopy) // false, these two variables point to different objects

/* Second way - assign */
let shallowCopy1 = []
Object.assign(shallowCopy1, arr)
console.log(shallowCopy1)
console.log(arr === shallowCopy1) // false

/* Third way - spread operator */
let shallowCopy2 = [...arr]
console.log(shallowCopy2)
console.log(arr === shallowCopy2) // false
```

---

### Create a deep copy of an array

- This is safer if the array has a possibility of having nested objects.

---

```js
const deepCopy = (inObject) => {
  if (typeof inObject !== "object" || inObject === null) {
    return inObject // Return the value if inObject is not an object or is null. Recall that typeof null is object.
  }
  // Create an array or object to hold the values
  let outObject = Array.isArray(inObject) ? [] : {}
  for (let key in inObject) {
    let value = inObject[key]
    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value)
  }
  return outObject
}
```

---

### Find

- The find method returns the value of the first element in the array that satisfies the callback function.

---

```js
let arr = [1, 5, 11, 16, 25, 32]
let divisibleByTwo = arr.find((el) => el % 2 === 0)
console.log(divisibleByTwo) // 16, only first element that evaluates true is returned
let divisibleByThree = arr.find((el) => el % 3 === 0)
console.log(divisibleByThree) // undefined
```

---

### Includes

- The include method determines if an array contains an element; returns a boolean.

---

```js
let arr = [1, 5, 11, 16, 25, 32]
console.log(arr.includes(25)) // true
console.log(arr.includes("25")) // false
```

---

### Concat

- The concat method merges two or more arrays. It does not change existing arrays but instead returns a new one.

---

```js
let arr = [1, 2, 3]
let arr1 = [4, 5, 6]
let arr3 = arr.concat(arr1)
console.log(arr3) // [ 1, 2, 3, 4, 5, 6 ]
```

### Flatten an array

---

```js
let arr = [[1], 2, 3, [4, 5, 6]]
arr = [].concat(...arr) // Will only work on 1 nested level
console.log(arr) // [ 1, 2, 3, 4, 5, 6 ]

let arr = [[1], 2, 3, [4, 5, 6, [7, 8]]]
arr = [].concat(...arr)
console.log(arr) // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]

// Use this function instead
const flatten = (arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    )
  }, [])
}

let arr = [[1], 2, 3, [4, 5, 6, [7, 8]]]
arr = flatten(arr)
console.log(arr) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

---

---

### Convert an array to a string

- Use toString().

---

```js
let arr = [1, 2, 3]
console.log(arr.toString()) // '1,2,3'
```

---

### Mutate an array from within a function

- This is against best practice as it's always a good idea to practice immutability.

```js
let arr = [1, 2, 3]

const mutateNaive = (arr) => {
  arr = ["a", "b", "c"]
}

mutateNaive(arr)
console.log(arr) // [1, 2, 3]

const mutate = (arr) => {
  let newArr = ["a", "b", "c"]
  arr = arr.splice(0, arr.length, ...newArr)
}

mutate(arr)
console.log(arr) // ['a', 'b', 'c']
```

---

_Author: Tu Vo_
