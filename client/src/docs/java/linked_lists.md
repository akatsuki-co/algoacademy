## Linked Lists

---

Java has a builtin collection for linked lists.

- Under the hood, it is implemented with a doubly linked list.

---

```java
import java.util.Iterator;
import java.util.LinkedList;

class LinkedListsTest {
  public static void main(String[] args) {
    // initialize linked list
    LinkedList<Integer> ll = new LinkedList<Integer>();

    // add - inserts element to the end of linked list
    for (int i = 1; i < 6; i++) {
        ll.add(i);
    }
    System.out.println(ll); // [1, 2, 3, 4, 5]
    // add to head
    ll.addFirst(0);
    System.out.println(ll); // [0, 1, 2, 3, 4, 5]
    // add to tail (default behavior)
    ll.addLast(6);
    System.out.println(ll); // [0, 1, 2, 3, 4, 5, 6]
    // add to middle
    ll.add(2, 100);
    System.out.println(ll); // [0, 1, 100, 2, 3, 4, 5, 6]

    // change elements
    ll.set(2, 200);
    System.out.println(ll); // [0, 1, 200, 2, 3, 4, 5, 6]

    // remove - deletes element from head of linked list
    ll.remove();
    System.out.println(ll); // [1, 200, 2, 3, 4, 5, 6]
    // remove from index
    ll.remove(1);
    System.out.println(ll); // [1, 2, 3, 4, 5, 6]

    // looping
    // basic for loop
    for (int i = 0; i < ll.size(); i++) {
        System.out.print(ll.get(i) + " ");
        // 1 2 3 4 5 6
    }
    // for each
    for (int i : ll) {
        System.out.print(i + " ");
        // 1 2 3 4 5 6
    }
    // using iterator
    Iterator<Integer> iter = ll.iterator();
    while (iter.hasNext()) {
        System.out.print(iter.next() + " ");
        // 1 2 3 4 5 6
    }
  }
}
```

---

_Author: Tu Vo_
