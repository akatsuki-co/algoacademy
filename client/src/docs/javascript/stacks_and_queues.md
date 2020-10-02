## Stacks

---

A stack is a data structure where elements are inserted and removed based on a last-in first-out (LIFO) principle.

- A helpful way to visualize a stack is to imagine a pancake "stack" where you eat things from the top or most recently added layer and work your way down to the oldest pancake.
- In JS, arrays can be used to represent a stack as it has both push and pop functionality. Alternatively, singly-linked lists can also be used.

In this example, we will be using ES6 class-based syntax.

---

```js
class Stack {
  constructor() {
    this.stack = []
    this.length = 0
  }

  /**
   * Pushes an element to the top of the stack.
   * Time complexity: O(1)
   */
  push(value) {
    this.stack.push(value)
    this.length++
  }

  /**
   * Pops an element off the top of the stack.
   * Time complexity: O(1)
   */
  pop() {
    this.length--
    return this.stack.pop()
  }

  /**
   * Determines if a stack is empty.
   */
  isEmpty() {
    return this.length === 0
  }

  /**
   * Peeks at the element at the top of the stack.
   */
  peek() {
    return this.stack[this.length - 1]
  }
}

const stack = new Stack()
console.log(stack) // Stack { stack: [], length: 0 }
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack) // Stack { stack: [ 1, 2, 3 ], length: 3 }
console.log(stack.peek()) // 3
stack.pop()
console.log(stack) // Stack { stack: [ 1, 2 ], length: 2 }
```

---

## Queues

---

A queue is a data structure where elements are inserted and removed based on a first-in first-out (FIFO) principle.

- A helpful way to visualize a queue is to imagine people in a line at an amusement park. People who line up first gets served first.
- In JS, arrays can also be used to represent a queue. Enqueuing will utilize the push method while dequeueing will utilize shift. Alternatively, singly linked lists can also be used.

In this example, we will be using ES6 class-based syntax.

---

```js
class Queue {
  constructor() {
    this.queue = []
    this.length = 0
  }

  /**
   * Adds an element to the front of a queue.
   * Time complexity: O(1)
   */
  enqueue(value) {
    this.queue.push(value)
    this.length++
  }

  /**
   * Pops an element off the front of a queue.
   * Time complexity: O(1) (in theory if using singly linked lists; shift may be an O(n) operation)
   */
  dequeue() {
    this.length--
    return this.queue.shift()
  }

  /**
   * Determines if a queue is empty.
   */
  isEmpty() {
    return this.length == 0
  }

  /**
   * Peeks at the element at the front of the queue.
   */
  peek() {
    if (!this.isEmpty) return this.queue[0]
  }
}

const q = new Queue()
const arr = [4, 5, 2, 8, 1, 9, 6, 7, 3, 0]
for (let i of arr) q.enqueue(i)
console.log(q) //Queue { queue: [ 4, 5, 2, 8, 1, 9, 6, 7, 3, 0 ], length: 10 }
console.log(q.dequeue()) // 4
console.log(q) // Queue { queue: [ 5, 2, 8, 1, 9, 6, 7, 3, 0 ], length: 9 }
console.log(q.peek()) // 5
```

_Author: Tu Vo_
