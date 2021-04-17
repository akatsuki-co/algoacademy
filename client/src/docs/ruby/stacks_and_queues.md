## Stacks

---

A stack is a data structure where elements are inserted and removed based on a last-in first-out (LIFO) principle.

- A helpful way to visualize a stack is to imagine a pancake "stack" where you eat things from the top or most recently added layer and work your way down to the oldest pancake.
- In Ruby, arrays can be used to represent a stack as it has both push and pop functionality. Alternatively, singly-linked lists can also be used.

---

```ruby
class Stack

  attr_reader :size

  def initialize()
    @size = 0
    @items = []
  end

  def empty?
    @size == 0
  end

  def push(item)
    @size += 1
    @items << item
  end

  def pop
    @size -= 1
    @items.pop
  end

  def peek
    @items.last
  end

  def inspect
    @items
  end

end
```

---

## Queues

---

A queue is a data structure where elements are inserted and removed based on a first-in first-out (FIFO) principle.

- A helpful way to visualize a queue is to imagine people in a line at an amusement park. People who line up first gets served first.
- In Ruby, arrays can also be used to represent a queue. Enqueuing will utilize the insert method while dequeueing will utilize pop. Alternatively, singly linked lists can also be used.

---

```ruby
class Queue

  attr_reader :size

  def initialize()
    @size = 0
    @items = []
  end

  def empty?
    @size == 0
  end

  def enqueue(item)
    @size += 1
    @items.insert(0, item)
  end

  def dequeue
    @size -= 1
    @items.pop
  end

  def peek
    @items.last
  end

  def inspect
    @items
  end

end
```

---

_Author: Tu Vo_
