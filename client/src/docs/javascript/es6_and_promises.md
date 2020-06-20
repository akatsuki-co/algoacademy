## ES6 and Promises

---

#### Destructuring

---

```js
const arr = [1, 2, 3]
let [a, b, c] = arr
console.log(a, b, c) // 1 2 3

const obj = {
  d: 1,
  e: 2,
  f: 3,
}
let { d, e, f } = obj
console.log(d, e, f) // 1 2 3

// Nested Destructuring
const obj1 = {
  g: 1,
  h: 2,
  i: {
    j: 3,
    k: 4,
  },
}

let {
  i: { j, k },
} = obj1
console.log(j, k) // 3 4
```

---

#### Concise properties

---

```js
let a = 'a'
let b = 'b'
let c = 'c'

// old way
const obj = {
  a: a,
  b: b,
  c: c,
}
console.log(obj) // { a: 'a', b: 'b', c: 'c' }

// new way
const obj1 = {
  a,
  b,
  c,
}
console.log(obj1) // { a: 'a', b: 'b', c: 'c' }
```

---

#### Promises

A promise is an object that may produce a single value some time in the future. Promises provide a solution to the problem of "callback-hells" in asynchronous programming. They are like event listeners in which you can register functions to be called when a task is completed.

- A promise can only have one of two possible resolution outcomes: fullfilled or rejected, with an optional single value. If a Promise is fulfilled, the final value is called a fulfillment. If it's rejected, the final value is called a reason (as in 'reason for rejection').
- Promises can be chained together.
- Promises can only be resolved once.

```js
let promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…
  if (/* everything turned out fine */) {
    resolve("Stuff worked!")
  }
  else {
    reject(Error("It broke"))
  }
})
```

---

##### Then

then() takes two arguments, a callback for a success case, and another for the failure case. Both are optional, so you can add a callback for the success or failure case only.

---

```js
promise.then(
  function (result) {
    console.log(result) // "Stuff worked!"
  },
  function (err) {
    console.log(err) // Error: "It broke"
  }
)
```

---

##### Catch

If we’re interested only in errors, then we can use null as the first argument: `.then(null, errorHandlingFunction)`. Or we can use `.catch(errorHandlingFunction)`, which is exactly the same.

---

```js
let promise = new Promise((resolve, reject) => {
  reject(new Error('Whoops!'))
})

promise.catch(alert) // "Error: Whoops!"
```

---

##### Finally

The call `.finally(f)` always runs when the promise is settled: whether it is resolved or rejected.

---

```js
new Promise((resolve, reject) => {
  resolve('result'), 1000
})
  .finally(() => alert('Promise ready'))
  .then((result) => alert(result))

// Promise ready
// result 
```

---

_Author: Tu Vo_
