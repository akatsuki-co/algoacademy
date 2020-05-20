## Stacks and Queues

---

### Stack

```python
class Stack:
    # Simple implementation of Stack using lists
    def __init__(self):
        # Initialize an empty Stack
        self.items = []

    def is_empty(self):
        # Check if it's empty
        return self.items == []

    def push(self, item):
        # Append an item
        self.items.append(item)

    def pop(self):
        # Pop the last item
        return self.items.pop()

    def peek(self):
        # Return the value of the last item
        return self.items[len(self.items) - 1]

    def size(self):
        # Return the size
        return len(self.items)
```

---

### Queue

```python
class Queue:
    # Simple implementation of Queue using lists
    def __init__(self):
        # Initialize an empty Queue
        self.items = []

    def is_empty(self):
        # Check if it's empty
        return self.items == []

    def enqueue(self, item):
        # Insert an item at the back of the line
        self.items.insert(0, item)

    def dequeue(self):
        # Remove the item at the front of the line
        return self.items.pop()

    def size(self):
        # Return the size
        return len(self.items)
```

---

_Author: Brent Muha_
