## Stacks

---

A stack is a data structure where elements are inserted and removed based on a last-in first-out (LIFO) principle.

- A helpful way to visualize a stack is to imagine a pancake "stack" where you eat things from the top or most recently added layer and work your way down to the oldest pancake.
- In Java, ArrayLists or singly-linked lists can also be used to represent a stack.

In this example, we will be using a generic class with linked-list nodes.

---

```java
import java.util.EmptyStackException;

public class MyStack<T> {
    private static class StackNode<T> {
        private T data;
        private StackNode<T> next;

        public StackNode(T data) {
            this.data = data;
        }
    }

    private StackNode<T> top;

    // Time complexity: O(1)
    public T pop() {
        if (top == null) throw new EmptyStackException();
        T item = top.data;
        top = top.next;
        return item;
    }

    // Time complexity: O(1)
    public void push(T item) {
        StackNode<T> t = new StackNode<T>(item);
        t.next = top;
        top = t;
    }

    // Time complexity: O(1)
    public T peek() {
        if (top == null) throw new EmptyStackException();
        return top.data;
    }

    public boolean isEmpty() {
        return top == null;
    }
}
```

---

## Queues

---

A queue is a data structure where elements are inserted and removed based on a first-in first-out (FIFO) principle.

- A helpful way to visualize a queue is to imagine people in a line at an amusement park. People who line up first gets served first.
- In Java, ArrayLists or singly-linked lists can also be used to represent a stack.

In this example, we will be using a generic class with linked-list nodes.

---

```java
import java.util.NoSuchElementException;

public class MyQueue<T> {
    private static class QueueNode<T> {
        private T data;
        private QueueNode<T> next;

        public QueueNode(T data) {
            this.data = data;
        }
    }

    private QueueNode<T> first;
    private QueueNode<T> last;

    // Time complexity: O(1)
    public void add(T item) {
        QueueNode<T> t = new QueueNode<T>(item);
        if (last != null) {
            last.next = t;
        }
        last = t;
        if (first == null) {
            first = last;
        }
    }

    // Time complexity: O(1)
    public T remove() {
        if (first == null) throw new NoSuchElementException();
        T data = first.data;
        first = first.next;
        if (first == null) {
            last = null;
        }
        return data;
    }

    // Time complexity: O(1)
    public T peek() {
        if (frist == null) throw new NoSuchElementException();
        return first.data;
    }

    public boolean isEmpty() {
        return first == null;
    }
}
```

---

_Author: Tu Vo_
