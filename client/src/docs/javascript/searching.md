## Searching

---

### Linear Search

- Time complexity: O(log(n))

---

```js
const linearSearch = (array, value) => {
  if (!array) return -1
  for (let i = 0; i < array.length; i++)
    if (array[i] === value)
      return i
  return -1
}
```

---

### Binary Search

- Time complexity: O(log(n))

---

```js
const binarySearch = (array, value) => {
  if (!array) return -1
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (value > array[mid])
      start = mid + 1
    else if (value < array[mid])
      end = mid - 1
    else
      return mid
  }
  return -1
}
```

---

_Author: Tu Vo_
