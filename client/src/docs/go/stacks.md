## Stacks

---

A stack is a data structure where elements are inserted and removed based on a last-in first-out (LIFO) principle.

- A helpful way to visualize a stack is to imagine a pancake "stack" where you eat things from the top or most recently added layer and work your way down to the oldest pancake.
- In C, a singly linked-list is generally used to represent a stack.

---

```go
type Stack struct {
	items []int
    size int
}

func Constructor() Stack {
	return Stack{}
}
```

---

### Check if a stack is empty

- Runtime: O(1)

---

```go
func (this *Stack) Is_Empty() bool {
    return this.size == 0
}
```

---

### Push a node onto a stack

- Runtime: O(1)

---

```go
func (this *Stack) Push(n int) {
	this.items = append(this.items, n)
    this.size++
}
```

---

### Pop a node out of a stack

- Runtime: O(1)

---

```go
func (this *Stack) Pop() int {
    if this.Is_Empty() {
        panic("Can't pop from empty stack")
    }
    item := this.items[this.size - 1]
    this.items = this.items[:this.size-1]
    this.size--
    return item
}
```

---

### Peek

- Runtime: O(1)

```go
func (this *Stack) Peek() int {
    if this.Is_Empty() {
        panic("Stack is empty")
    }
	return this.items[this.size-1]
}
```

---

_Author: Tu Vo_
