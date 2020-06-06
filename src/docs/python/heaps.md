## Heaps

---

A heap is a tree-based data structure in which the tree is a complete binary tree. Being complete means every level, except possibly the last, is completely filled, and all nodes are as far left as possible. Heaps can be of two types:

- min-heap: the root will be the minimum among all of it's children. This is recursively true of all of its child nodes.
- max-heap: the root will be the maximum among all of it's children. This is recursively true of all of its child nodes.

Heaps can be represented with either arrays or binary trees. In Python, the `heapq` library provides a lot of functionality to work with heaps.

---

### Heapify

In order to to transform a populated list into a heap, use `heapify`. By default, `heapify` will always convert a list into a min-heap.

- Time complexity: O(n)

```python
from heapq import heapify

arr = [43, 36, 16, 73, 65, 71, 54, 88, 44, 7]
heapify(arr)
print(arr) # [7, 36, 16, 44, 43, 71, 54, 88, 73, 65]
```

### Heappush and Heappop

In order to insert and remove elements, use `heappush` and `heappop` respectively. The first argument to these functions will always be the heap as it changes the heap in-place.

- Time complexity: O(log(n))

```python
from heapq import heappush, heappop

print(arr) # [7, 36, 16, 44, 43, 71, 54, 88, 73, 65]

heappush(arr, -3)
print(arr) # [-3, 7, 16, 44, 36, 71, 54, 88, 73, 65, 43]

lowest = heappop(arr)
print(lowest) # -3
```

### Max Heaps

Converting a list into a max-heap requires changing all inserted values into the opposite sign first. Just be sure to revert the values when popping.

```python
arr = [43, 36, 16, 73, 65, 71, 54, 88, 44, 7]
arr = [-x for x in arr]
print(arr) # [-43, -36, -16, -73, -65, -71, -54, -88, -44, -7]

heapify(arr)
print(arr) # [-88, -73, -71, -44, -65, -16, -54, -36, -43, -7]

highest = heappop(arr)
print(-highest) # 88

# Simultaneously push and pop
highest = heappushpop(arr, -60)
print(-highest) # 73
print(arr) # [-71, -65, -60, -44, -7, -16, -54, -36, -43]
```

---

### Priority Queues

A priority queue is an abstract data structure that is similar to a queue, except each item has a special “key” to quantify its “priority”. In the case of where two items share the same priority, the item that was added first usually gets removed first.

Priority queues are implemented with heaps to take advantage of the fast insertion and deletion when you work with a stream of items.

---

```python
import itertools
from enum import Enum
from heapq import heappush, heappop

class HeapItemStatus(Enum):
    ACTIVE = 1
    INACTIVE = 2

class PriorityQueue:

    def __init__(self):
        self.pq = [] # list of entries arranged in a heap
        self.entry_finder = {} # mapping of tasks to entries
        self.counter = itertools.count() # unique sequence count

    def add_task(self, task, priority=0):
        """
        Adds a new task or update the priority of an existing task.
        """
        if task in self.entry_finder:
            self.remove_task(task)
        count = next(self.counter)
        entry = [priority, count, task, HeapItemStatus.ACTIVE]
        self.entry_finder[task] = entry
        heappush(self.pq, entry)

    def remove_task(self, task):
        """
        Marks an existing task as INACTIVE.
        """
        entry = self.entry_finder.pop(task)
        entry[-1] = HeapItemStatus.INACTIVE

    def pop_task(self):
        """
        Removes and returns the lowest priority task.
        """
        while self.pq:
            priority, count, task, status = heappop(self.pq)
            if status is HeapItemStatus.ACTIVE:
                del self.entry_finder[task]
                return task

pq = PriorityQueue()
pq.add_task("eat", 9)
pq.add_task("sleep", 10)
pq.add_task("play", 8)
pq.add_task("nap", 9)
pq.add_task("run", 7)
pq.remove_task("nap")
while pq.pq:
    print(pq.pop_task())
# run
# play
# eat
# sleep

```

_Author: Tu Vo_
