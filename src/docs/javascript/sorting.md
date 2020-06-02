## Sorting

---

### 3 ways to write swap functions in JS

---

```js
// Using ES6 destructuring
const swapDestructure = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]])

// Using a temporary variable
const swapTmp = (arr, a, b) => {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

// Using XOR
const swapXOR = (arr, a, b) => {
  arr[a] ^= arr[b]
  arr[b] ^= arr[a]
  arr[a] ^= arr[b]
}
```

---

### Bubble Sort

- Time complexity: O(n\*\*2).

---

```js
const bubbleSort = (arr) => {
  let isSorted = true
  end = arr.length
  while (isSorted) {
    isSorted = false
    for (let i = 1; i < end; i++) {
      if (arr[i] < arr[i - 1]) swap(arr, i, i - 1)
      isSorted = true
    }
    end--
  }
}
```

---

### Insertion Sort

- Time complexity: O(n\*\*2).

---

```js
const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++)
    for (let j = i; j > 0; j--) if (arr[j] < arr[j - 1]) swap(arr, j, j - 1)
}
```

---

### Selection Sort

- Time complexity: O(n\*\*2).

---

```js
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let m = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[m]) m = j
    }
    if (i != m) swap(arr, i, m)
  }
}
```

---

### Quicksort

- Time complexity: O(n \* log(n)).

---

```js
const partition = (arr, low, high) => {
  let i = low - 1
  let pivot = arr[high]
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++
      swap(arr, i, j)
    }
  }
  swap(arr, i + 1, high)
  return i + 1
}

const quickSort = (arr, low, high) => {
  if (low < high) {
    let p = partition(arr, low, high)
    quickSort(arr, low, p - 1)
    quickSort(arr, p + 1, high)
  }
}
```

---

### Shellsort

- Time complexity: O(n \* log(n)).

---

```js
const shellSort = (arr) => {
  let n = 0
  while (Math.floor(n < arr.length / 3)) n = n * 3 + 1
  while (n > 0) {
    for (let i = n; i < arr.length; i++) {
      let tmp = arr[i]
      let j = i
      while (j >= n && arr[j - n] > tmp) {
        arr[j] = arr[j - n]
        j -= n
        arr[j] = tmp
      }
    }
    n = Math.floor((n - 1) / 3)
  }
}
```

---

### Counting Sort

- Time complexity: O(n + k) where n is the number of items and k is the number of possible values.
- Space complexity: O(max(n)).
- This implementation will not work with negative values.

---

```js
const countingSort = (arr) => {
  const max = Math.max(...arr) + 1
  let k = 0
  let newArr = new Array(max).fill(0)
  arr.forEach((e) => newArr[e]++)
  for (let i = 0; i < max; i++) {
    if (i != 0) newArr[i] += newArr[i - 1]
    while (newArr[i] != k) {
      arr[k] = i
      k += 1
    }
  }
}
```

---

### Merge Sort

- Time complexity: O(n \* log(n)).

---

```js
const merge = (l, r) => {
  const arr = []
  let i = 0
  let j = 0
  while (i < l.length && j < r.length) {
    if (l[i] <= r[j]) {
      arr.push(l[i])
      i++
    } else {
      arr.push(r[j])
      j++
    }
  }
  while (i < l.length) {
    arr.push(l[i])
    i++
  }
  while (j < r.length) {
    arr.push(r[j])
    j++
  }
  return arr
}

// Returns a new array
const mergeSort = (arr) => {
  if (arr.length < 2) return arr
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}
```

---

### Heap Sort

- Time complexity: O(n \* log(n)).

---

```js
const heapify = (arr, n, i) => {
  let largest = i
  const l = 2 * i + 1
  const r = 2 * i + 2
  if (l < n && arr[i] < arr[l]) largest = l
  if (r < n && arr[largest] < arr[r]) largest = r
  if (largest != i) {
    swap(arr, i, largest)
    heapify(arr, n, largest)
  }
}

const heapSort = (arr) => {
  const n = arr.length
  for (let i = n; i >= 0; i--) heapify(arr, n, i)
  for (let i = n - 1; i > 0; i--) {
    swap(arr, i, 0)
    heapify(arr, i, 0)
  }
}
```

---

### Radix Sort

- Time complexity: O(k + n) where k is the key length and n is the number of keys.
- This implementation will not work with negative values.

---

```js
const getDigit = (num, i) => Math.floor(num / 10 ** i) % 10
const maxDigits = (arr) => Math.max(...arr).toString().length
const radixSort = (arr) => {
  const maxLength = maxDigits(arr)
  let res
  for (let i = 0; i < maxLength; i++) {
    res = []
    for (let j = 0; j < 10; j++) res.push([])
    arr.forEach((e) => {
      const digit = getDigit(e, i)
      res[digit].push(e)
    })
    res = [].concat(...res)
  }
  arr = arr.splice(0, arr.length, ...res)
}
```

---

_Author: Tu Vo_
