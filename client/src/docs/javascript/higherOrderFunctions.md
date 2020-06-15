## Higher-Order Functions

Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. In JS, arrays have four common higher-order functions that are used to manipulate data.

---

#### Foreach

- `foreach()` takes an anonymous function and calls that function on every element in the array.
- does not mutate array values.
- no return value.
- limitations of foreach loop is that you cannot break out of it as you can in regular loops.

---

```js
const arr = [1, 2, 3, 4, 5]
arr.forEach((el) => console.log(el))
// 1
// 2
// 3
// 4
// 5

// higher-order functions also have access to index
arr.forEach((el, index) => console.log(`${el} is at index ${index}`))
// 1 is at index 0
// 2 is at index 1
// 3 is at index 2
// 4 is at index 3
// 5 is at index 4
```

---

#### Map

- `map` takes an anonymous function and returns a new array with the function called on every element.
- callback **needs** to return a value in order to modify value.

---

```js
const arr = [1, 2, 3, 4, 5]
let res = arr.map((el) => el * 2)
console.log(res) // [ 2, 4, 6, 8, 10 ]

// multi-line callback
res = arr.map((el) => {
  if (el % 2 == 0) return el * 2
  return el
})
console.log(res) // [ 1, 4, 3, 8, 5 ]

// without return, undefined behavior
res = arr.map((el) => {
  if (el % 2 == 0) el * 2
})
console.log(res) // [ undefined, undefined, undefined, undefined, undefined ]
```

---

#### Filter

- `filter` takes an anonymous function and returns a new array with only values that return true from the callback.
- callback **needs** to return an expression in order to apply filter.

---

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let res = arr.filter((el) => el % 2 == 0)
console.log(res) // [ 2, 4, 6, 8, 10 ]

// multi-line callback
res = arr.filter((el) => {
  if (el % 3 == 0) return true
  return false
})
console.log(res) // [ 3, 6, 9 ]
```

---

#### Reduce

- `reduce` takes an anonymous function and an accumulator and returns the accumulator after that it performs the callback on every element.
- accumulator can be any data type.
- callback **needs** to return the accumulator through every iteration.

```js
// compute sum of array
let arr = [1, 2, 3, 4, 5]
let res = arr.reduce((accumulator, el) => {
  accumulator += el
  return accumulator
}, 0)
console.log(res) // 15

// create a counter
let word = 'alphabet'
let counter = word.split('').reduce((obj, char) => {
  obj[char] = char in obj ? ++obj[char] : 1
  return obj
}, {})
console.log(counter) // { a: 2, l: 1, p: 1, h: 1, b: 1, e: 1, t: 1 }

// determine if array has an odd element
arr = [2, 4, 6, 7, 8, 10]
let hasOdd = arr.reduce((bool, el) => {
  if (el & 1) bool = true
  return bool
}, false)
console.log(hasOdd) // true

// chain multiple higher order functions
arr = [1, 2, 3, 4, 5]
res = arr
  .map((el) => el * 3) // [3, 6, 9, 12, 15]
  .filter((el) => el % 2 == 0) // [6, 12]
  .reduce((acc, el) => acc + el, 0) // 18

console.log(res) // 18
```

---

_Author: Tu Vo_
