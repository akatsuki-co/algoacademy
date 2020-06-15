## Linked Lists

---

A linked list is a data structure where elements are linked with pointers, therefore not being contiguous in memory.

- Each link, or more commonly referred to as "node", contains a data field and a reference to the next node in the list.
- The last node will point to a null value.
- Variants of linked lists include singly (each node has one pointer) or doubly (each node has two pointers).

In this example, we will be using ES6 class-based syntax.

---

```js
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  /**
   * Adds a new node to the head of a singly linked list.
   * Time complexity: O(1)
   */
  addNode(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
    return node
  }

  /**
   * Deletes a node at a given index.
   * Time complexity: O(n)
   */
  deleteNode(index) {
    /* Delete head */
    let curr = this.head
    let prev
    if (index >= this.length || index < 0) throw new Error("index out of range")
    if (index === 0) {
      this.head = curr.next
    } else if (index === this.length - 1) {
      /* delete last node */
      while (curr.next) {
        prev = curr
        curr = curr.next
      }
      prev.next = null
    } else {
      while (index) {
        prev = curr
        index--
        curr = curr.next
      }
      prev.next = curr.next
    }
  }
}
```

---

**Interview Question**

### Detect if a linked list has a cycle

- A cycle occurs when a node in a linked list points to a previous node in the list, therefore causing the linked list to loop.
- Time complexity: O(n)
- Space complexity: O(1)
---

```js
class SinglyLinkedList {
  //...

  isCircular() {
    let hare = this.head
    let tortoise = this.head
    while (hare && hare.next) {
      hare = hare.next.next
      tortoise = tortoise.next
      if (hare === tortoise) return true
    }
    return false
  }
}
```

---

**Interview Question**

### Determine if two linked lists intersect and if so, return the node where they first meet.

- Time complexity: O(n)
- Space complexity: O(1)

---

```js
class SinglyLinkedList {
  //...

  findIntersection(otherList) {
    const longer = this.length > otherList.length ? this : otherList
    const shorter = this.length <= otherList.length ? this : otherList
    let difference = longer.length - shorter.length
    let longerStart = longer.head
    let shorterStart = shorter.head
    while (difference) {
      longerStart = longerStart.next
      difference--
    }
    while (longerStart) {
      if (longerStart == shorterStart) {
        return longerStart
      }
      longerStart = longerStart.next
      shorterStart = shorterStart.next
    }
    return null
  }
}
```

---

_Author: Tu Vo_
