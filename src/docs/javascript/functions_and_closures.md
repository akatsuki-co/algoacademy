## Functions

Functions return undefined by default.

General format:

```txt
function name_of_function(function parameter(s)) {
    function body
}
```

Arrow format:

```txt
const name_of_function = (function parameter(s)) => {
    function body
})
```

---

## Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.

```js
const multiplyBy2 = () => {
  let value = 2
  const multiply = (num) => {
    return num * value // multiply has access to value because of closure
  }
  return multiply
}

const res = multiplyBy2()
console.log(res(5)) // 10
```

---

### Building a cache with closure

---

```js
const cache = (func) => {
  const cacheResult = {}
  return (...args) => {
    const key = JSON.stringify(args)
    if (!cacheResult[key]) {
      console.log("Calculating...")
      cacheResult[key] = func(...args)
    } else {
      console.log("From cache...")
    }
    return cacheResult[key]
  }
}

const sum = (a, b) => a + b

let cacheSum = cache(sum)
console.log(cacheSum(1, 2)) // Calculating... 3
console.log(cacheSum(1, 2)) // From cache...  3
console.log(cacheSum(2, 3)) // Calculating... 5
```

---

_Author: Tu Vo_
