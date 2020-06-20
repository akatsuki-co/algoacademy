## Hash Tables

---

A hash table is a data structure that maps keys to values.

- It is implemented with an array that uses a hash function to compute an index for its keys.
- In the event that there is a collision (duplicate keys), there are several strategies that can be used to handle it:
  1. Separate chaining - a linked list (or other data structure) is used to store duplicate key/value pairs
  2. Open addressing - the next empty index in the array is used to store duplicate key/value pairs

In Python, the `dict` object is a primarily used as hash tables. Check out our section on dictionaries on the left for more info.

Below is a manual implementation with arrays and linked lists.

---

```python
HASH_TABLE_SIZE = 1000

class ListNode:
    def __init__(self, key: str, value: str):
        self.val = (key, value)
        self.next = None

class MyHashTable:
    def __init__(self):
        self.hm = [None for i in range(HASH_TABLE_SIZE)]

    def set(self, key: str, value: int):
        """
        Adds key, val pair into hash map. Handles collisions by
        placing nodes at end of linked list.
        Amortized O(1) time complexity.
        """
        node = ListNode(key, value)
        h = self.get_hash(key)
        if not self.hm[h]:
            self.hm[h] = node
        else:
            prev, curr = None, self.hm[h]
            while curr:
                if curr.val[0] == key:
                    curr.val = (key, value) # Update
                    return
                prev = curr
                curr = curr.next
            prev.next = node

    def get(self, key: str) -> int:
        """
        Returns the value to which the specified key is mapped,
        or -1 if this map contains no mapping for the key.
        Amortized O(1) time complexity.
        """
        h = self.get_hash(key)
        if not self.hm[h]:
            return -1
        curr = self.hm[h]
        while curr:
            if curr.val[0] == key:
                return curr.val[1]
            curr = curr.next
        return -1

    def remove(self, key: str):
        """
        Removes the mapping of the specified value key if this
        map contains a mapping for the key.
        Amortized O(1) time complexity.
        """
        h = self.get_hash(key)
        if not self.hm[h]:
            return
        prev = curr = self.hm[h]
        if curr.val[0] == key: # head
            self.hm[h] = curr.next
        else:
            curr = curr.next
            while curr:
                if curr.val[0] == key:
                    prev.next = curr.next
                    return
                prev = prev.next
                curr = curr.next

    def get_hash(self, key: str) -> int:
        """
        djb2 algorithm.
        """
        h = 5381
        for char in key:
            h = ((h << 5) + h) + ord(char) # h * 33 + char
        return h % HASH_TABLE_SIZE
```

---

_Author: Tu Vo_
