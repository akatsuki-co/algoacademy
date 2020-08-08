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

There is also a builtin Queue collection in Java.

---

```java
import java.util.Queue;
import java.util.LinkedList;

class QueueTest {
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<Integer>();

        System.out.println(q.isEmpty()); // true

        int[] arr = { 1, 2, 3, 4, 5 };
        // Add element to back of queue
        // Time complexity: O(1)
        for (int i : arr)
            q.add(i);
        System.out.println(q); // [1, 2, 3, 4, 5]

        // Contains
        // Time complexity: O(n)
        System.out.println(q.contains(2)); // true
        System.out.println(q.contains(8)); // false

        // Peek (returns element at front of queue)
        // Time complexity: O(1)
        System.out.println(q.peek()); // 1

        // Poll (removes element at front of queue and returns it)
        // Time complexity: O(1)
        for (int i = 0; i < 2; i++)
            System.out.print(q.poll() + " "); // 1 2
        System.out.println(q); // [3, 4, 5]

        // Loop through queue
        q.forEach(i -> {
            System.out.print(i + " "); // 3 4 5
        });
    }
}
```

---

_Author: Tu Vo_
