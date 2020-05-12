
## Hash Tables

---

A hash table is a data structure that maps keys to values.

- It is implemented with an array that uses a hash function to compute an index for its keys.
- In the event that there is a collision (duplicate keys), there are several strategies that can be used to handle it:
  1. Separate chaining - a linked list (or other data structure) is used to store duplicate key/value pairs
  2. Open addressing - the next empty index in the array is used to store duplicate key/value pairs

---

### Initialize a hash table

---

```golang
const hashTableSize = 1024

type node struct {
    key string
    value string
    next *node
}

type hashTable struct {
    array[hashTableSize]*node
}
```

---

### Implement a hash function

- We will be using the djb2 algorithm

---

```golang
func hashDjb2(str string) int {
    // use of prime number
	hash := 5381;
    for _, char := range(str) {
        hash = ((hash << 5) + hash) + int(char) // hash * 33 + c
    }
	return hash;
}
```

---

### Generate a key

---

```golang
func generateKey(key string) int {
	return hashDjb2(key) % hashTableSize
}

```

---

### Set a key/value pair

- We will be using separate chaining to handle collisions
- Runtime: O(1)

---

```golang
func set(ht hashTable, key string, value string) {
    index := generateKey(key)
    curr := ht.array[index]
    if curr == nil {
        ht.array[index] = &node{key, value, nil}
        return
    }
    for curr != nil {
        // replace an existing key
        if curr.key == key {
            curr.value = value
            return
        }
        // add new key/value
        if curr.next == nil {
            curr.next = &node{key, value, nil}
            return
        }
        curr = curr.next
    }
}
```

---

### Get a value

- Runtime: O(1)

---

```golang
func get(ht hashTable, key string) (string, bool) {
    index := generateKey(key)
    curr := ht.array[index]
    for curr != nil {
        // key exists
        if curr.key == key {
            return curr.value, true
        }
        curr = curr.next
    }
    // key doesn't exist
    return "", false
}

```

---

_Author: Tu Vo_
