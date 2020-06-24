## Queues

---

A queue is a data structure where elements are inserted and removed based on a first-in first-out (LIFO) principle.

- A helpful way to visualize a queue is to imagine people in a line at an amusement park. People who line up first gets served first.
- In C, a singly linked-list with two pointers that reference the head and tail of the list is used to represent a queue.

---

```go
type Queue struct {
	items []int
    size int
}

func Constructor() Queue {
	return Queue{}
}
```

---

### Check if a queue is empty

- Runtime: O(1)

---

```go
func (this *Queue) Is_Empty() bool {
    return this.size == 0
}
```

---

### Enqueue a node

- Runtime: O(1)

---

```go
func (this *Queue) Enqueue(n int) {
	this.items = append(this.items, n)
    this.size++
}
```

---

### Dequeue a node

- Runtime: O(1)

---

```go
func (this *Queue) Dequeue() int {
    if this.Is_Empty() {
        panic("Can't pop from empty queue")
    }
    item := this.items[0]
    this.items = this.items[1:]
    this.size--
    return item
}
```

---

### Peek

- Runtime: O(1)

```go
func (this *Queue) Peek() int {
    if this.Is_Empty() {
        panic("Stack is empty.")
    }
	return this.items[0]
}
```

---

**Interview Question**

### Implement a queue with two stacks

- Enqueue: O(1) runtime
- Dequeue: amortized O(1) runtime
- Peek: amortized O(1) runtime

---

```go
package main

import (
    "stack"
    "fmt"
)

type Queue struct {
	oldest Stack
	newest Stack
}

func Constructor() Queue {
	return Queue{}
}

func (this *Queue) Enqueue(n int) {
	this.newest.Push(n)
}

func (this *Queue) ShiftStacks() {
	if this.oldest.Is_Empty() {
		for !this.newest.Is_Empty() {
			this.oldest.Push(this.newest.Pop())
		}
	}
}

func (this *Queue) Dequeue() int {
	this.ShiftStacks()
	return this.oldest.Pop()
}

func (this *Queue) Peek() int {
	this.ShiftStacks()
	return this.oldest.Peek()
}

func main() {
	queue := QConstructor()
	for i := 0; i < 5; i++ {
		queue.Enqueue(i)
	}
	fmt.Println(queue) // {{[] 0} {[0 1 2 3 4] 5}}
	for i := 0; i < 5; i++ {
		popped := queue.Dequeue()
		fmt.Println(popped) // 0 1 2 3 4
    }
	fmt.Println(queue) // {{[] 0} {[] 0}}
}
```

---

_Author: Tu Vo_
