## Heaps

---

A heap is a tree-based data structure in which the tree is a complete binary tree. Being complete means every level, except possibly the last, is completely filled, and all nodes are as far left as possible. Heaps can be of two types:

- min-heap: the root will be the minimum among all of it's children. This is recursively true of all of its child nodes.
- max-heap: the root will be the maximum among all of it's children. This is recursively true of all of its child nodes.

Heaps can be represented with either arrays or binary trees.

In this example, we will be using the PriorityQueue<> collection.

---

```java
import java.util.PriorityQueue;

class PriorityQueueTest {
      public static void main(String[] args) {
            // initialize priority queue
            var pq = new PriorityQueue<Integer>();

            // add elements, retains minimum value at front of queue
            // O(log(n)) time complexity
            pq.add(9);
            pq.add(5);
            pq.add(1);
            pq.add(3);
            pq.add(11);
            pq.add(7);

            // peak front of queue
            // O(1) time complexity
            System.out.println(pq.peek()); // 1

            // remove an element from queue
            // O(log(n)) time complexity
            System.out.println(pq.remove(11)); // true
            System.out.println(pq.remove(100)); // false

            // poll - remove element at front of queue
            // O(log(n)) time complexity
            while (!pq.isEmpty())
                  System.out.print(pq.poll() + " ");
            // 1 3 5 7 9

            // default behavior of Priority Queue is smallest element first
            // for max-heaps, pass in a lambda comparator
            var maxHeap = new PriorityQueue<Integer>((x, y) -> y - x);
            maxHeap.add(9);
            maxHeap.add(5);
            maxHeap.add(1);
            maxHeap.add(3);
            maxHeap.add(7);
            while (!maxHeap.isEmpty())
                  System.out.print(maxHeap.poll() + " ");
            // 9 7 5 3 1
      }
}
```

---

## Working with Non-Primitives and Custom Comparators

- You can pass into user-defined classes as a generic type for Priority Queues, as long as it implements a comparable.
- In this example, we are polling students with highest grades first. In the event where two students have similar grades, we poll the student with the higher ID number.

---

```java
import java.util.PriorityQueue;

class Student implements Comparable<Student> {
      private int grades;
      private int id;

      public Student(int grades, int id) {
            this.grades = grades;
            this.id = id;
      }

      public int getGrades() {
            return this.grades;
      }

      public int getId() {
            return this.id;
      }

      @Override
      public int compareTo(Student other) {
            if (other.getGrades() == this.getGrades())
                  return other.getId() - this.getId();
            return other.getGrades() - this.getGrades();
      }
}

class PriorityQueueTest {
      public static void main(String[] args) {
            var student1 = new Student(80, 651);
            var student2 = new Student(90, 652);
            var student3 = new Student(75, 653);
            var student4 = new Student(90, 654);
            var student5 = new Student(50, 655);

            var studentHeap = new PriorityQueue<Student>();
            studentHeap.add(student1);
            studentHeap.add(student2);
            studentHeap.add(student3);
            studentHeap.add(student4);
            studentHeap.add(student5);

            while (!studentHeap.isEmpty()) {
                  Student s = studentHeap.poll();
                  System.out.println(s.getGrades() + " " + s.getId());
            }
            // 90 654
            // 90 652
            // 80 651
            // 75 653
            // 50 655
      }
}
```

---

_Author: Tu Vo_
