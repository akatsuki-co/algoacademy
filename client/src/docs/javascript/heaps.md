## Heaps

---

A heap is a tree-based data structure in which the tree is a complete binary tree. Being complete means every level, except possibly the last, is completely filled, and all nodes are as far left as possible. Heaps can be of two types:

- min-heap: the root will be the minimum among all of it's children. This is recursively true of all of its child nodes.
- max-heap: the root will be the maximum among all of it's children. This is recursively true of all of its child nodes.

Heaps can be represented with either arrays or binary trees.

In this example, we will be using ES6 class-based syntax and arrays.

---

```js
class MaxHeap {
  constructor() {
    this.values = []
  }

  /* Helper function to swap values in array */
  swap(index1, index2) {
    const temp = this.values[index1]
    this.values[index1] = this.values[index2]
    this.values[index2] = temp
  }
```

---

### Insert a value into a max heap.

- Time complexity: O(log(n))
  1. Append value to heap array.
  2. Bubble up. This process involves comparing the value at a given index with its parent's value. The parent's index can be calculated with the following formula: `Math.floor((index - 1) / 2)`. If the parent's value is lesser than the current value, swap values at indexes and then recursively bubble up. This goes until the parent's value is greater or equal to the current value or when you reach the root.

---

```js
class MaxHeap {
  //...
  insert(val) {
    this.values.push(val)
    this.bubbleUp()
  }

  bubbleUp() {
    let index = this.values.length - 1
    const ele = this.values[index]
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.values[parentIndex]
      if (parent < ele) {
        this.swap(parentIndex, index)
        index = parentIndex
      } else {
        break
      }
    }
  }
```

---

### Extract the max value from the heap.

- Time complexity: O(log(n))
  1. Swap values at first and last indexes in array.
  2. Pop the last element in array to remove the max value.
  3. Sink down. This process involves comparing the current value with its child nodes. If one or more of the children has a greater value, swap with the bigger one. This is done recursively until the current value is greater than both its children or there is no children to compare with.

---

```js
class MaxHeap {
  //...

  // Peek at max value in current heap.
  peek() {
    if (this.values.length > 0) return this.values[0]
  }

  extractMax() {
    const max = this.values[0]
    this.swap(0, this.values.length - 1)
    this.values.pop()
    if (this.values.length > 0) this.sinkDown()
    return max
  }

  sinkDown() {
    let parentIndex = 0
    while (true) {
      const currentVal = this.values[parentIndex]
      const leftIndex = 2 * parentIndex + 1
      const leftVal = this.values[leftIndex]
      const rightIndex = 2 * parentIndex + 2
      const rightVal = this.values[rightIndex]
      if (currentVal < leftVal && currentVal < rightVal) {
        if (rightVal > leftVal) {
          this.swap(parentIndex, rightIndex)
          parentIndex = rightIndex
        } else {
          this.swap(parentIndex, leftIndex)
          parentIndex = leftIndex
        }
      } else if (currentVal < leftVal) {
        this.swap(parentIndex, leftIndex)
        parentIndex = leftIndex
      } else if (currentVal <= rightVal) {
        this.swap(parentIndex, rightIndex)
        parentIndex = rightIndex
      } else {
        break
      }
    }
  }
}

const heap = new MaxHeap()
const arr = [81, 56, 22, 17, 19, 40, 32]
arr.forEach((e) => heap.insert(e))
console.log(heap)
/*
MaxBinaryHeap { values: [
    81, 56, 40, 17,
    19, 22, 32
  ] }
*/
console.log(heap.extractMax()) // 81
console.log(heap.extractMax()) // 56
console.log(heap.extractMax()) // 40
console.log(heap.extractMax()) // 32
console.log(heap) // MaxBinaryHeap { values: [ 22, 19, 17 ] }
```

---

_Author: Tu Vo_
