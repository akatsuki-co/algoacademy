
## Linked Lists

---

A linked list is a data structure where elements are linked with pointers, therefore not being contiguous in memory.

- Each link, or more commonly referred to as "node", contains a data field and a reference to the next node in the list.
- The last node will point to a nil value.
- Variants of linked lists include singly (each node has one pointer) or doubly (each node has two pointers).

---

```go
type node struct {
    n int
    next *node
}
```

---

### Add a node to a linked list

- Nodes are typically added to the head of a singly linked list as that is a O(1) operation.
- Adding anywhere else requires traversing the pointers to reach the desired location of insertion.

---

```go
package main

func addNode(head **node, n int) {
    newNode := node{n, nil}
    newNode.next = *head
    *head = &newNode
}

func main() {
    var head *node = nil
    for i := 0; i < 5; i++ {
        addNode(&head, i)
    }
    printList(head) // 4 -> 3 -> 2 -> 1 -> 0
}

```

---

**Interview Question**

### Insert a node in a sorted linked list

---

```go
func insertNode(head **node, n int) *node {
    if *head == nil {
        return nil
    }
    newNode := &node{n, nil}
    curr := *head
    if curr == nil {
        *head = newNode
        return newNode
    }
    if (n < curr.n) {
        newNode.next = curr
        *head = newNode
        return newNode
    }
    for curr.next != nil && curr.next.n <= n {
        curr = curr.next
    }
    newNode.next = curr.next
    curr.next = newNode
    return newNode
}
```

---

### Remove a node in a linked list

- Removing the head of a list is a O(1) operation.
- If you want to remove a node from a given index, that will require traversing the list, making it a O(n) operation.

---

```go
package main

func removeNodeAtIndex(head **node, index int) {
    if *head == nil {
        panic("list is empty")
    }
    curr := *head
    if (index == 0) {
        *head = curr.next
        return
    }
    for i := 0; curr != nil && i < index - 1; i++ {
        curr = curr.next
    }
    if curr == nil || curr.next == nil {
        panic("index out of bounds")
    }
    curr.next = curr.next.next
}

func main()
{
    // ...
    print_list(head); // 4 -> 3 -> 2 -> 1 -> 0
    removeNodeAtIndex(&head, 4);
    print_list(head); // 4 -> 3 -> 2 -> 1
    removeNodeAtIndex(&head, 0);
    print_list(head); // 3 -> 2 -> 1
}

```

---

**Interview Question**

### Delete a node in the middle of a linked list

- Given only its reference

```go
package main

func deleteMidNode(mid *node) {
    mid.n = mid.next.n
    mid.next = mid.next.next
}

func main()
{
    // ...
    printList(head); // 5 -> 4 -> 3 -> 2 -> 1
    delete_mid_node(node3);
    printList(head); // 5 -> 4 -> 2 -> 1
    return 0;
}

```

---

**Interview Question**

### Detect if a linked list has a cycle\n

- A cycle occurs when a node in a linked list points to a previous node in the list, therefore causing the linked list to loop.

```go
func hasCycle(head *node) bool {
    if head == nil {
        return false
    }
    h, t := head, head
    for h.next != nil && h.next.next != nil {
        t = t.next
        h = h.next.next
        if t == h {
            return true
        }
    }
    return false
}

```

---

_Author: Tu Vo_
