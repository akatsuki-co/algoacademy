## Collections

---

### Counter

The `Counter` object is a subclass of `dict` used to count hashable objects. It is an unordered collection where elements are stored as dictionary keys and their counts are stored as dictionary values.

---

```python
from collections import Counter

string = "alphabet"
c = Counter(string)
print(c) # Counter({'a': 2, 'l': 1, 'p': 1, 'h': 1, 'b': 1, 'e': 1, 't': 1})
```

---

#### Most Common

The `Counter` object has a method called `most_common(n)` that takes an optional integer argument. It returns a list of the `n` most common elements and their counts from the most common to the least. If `n` is omitted or `None`, `most_common()` returns all elements in the counter. Elements with equal counts are ordered arbitrarily.

---

```python
c = Counter([3, 7, 5, 2, 3, 5, 1, 3, 4, 5, 6, 7, 3, 4, 2, 1])
print(c) # Counter({3: 4, 5: 3, 7: 2, 2: 2, 1: 2, 4: 2, 6: 1})
print(c.most_common()) # [(3, 4), (5, 3), (7, 2), (2, 2), (1, 2), (4, 2), (6, 1)]
print(c.most_common(3)) # [(3, 4), (5, 3), (7, 2)]
```

---

**Interview Question**

#### Determine if two strings are anagrams of each other

- The `Counter` object can be compared with another `Counter` object for equality.

---

```python
def is_anagram(s: str, t: str) -> bool:
    return Counter(s) == Counter(t)

print(is_anagram("ate", "tea")) # True
print(is_anagram("ate", "tee")) # False
```

---

**Interview Question**

#### Given a string, sort it in decreasing order based on the frequency of characters.

---

```python
def frequency_sort(s: str) -> str:
    return ("".join(char * times for char, times in Counter(s).most_common()))

print(frequency_sort("tree")) # eetr
print(frequency_sort("abracadabra")) # aaaaabbrrcd
```

**Interview Question**

#### Given an array of integers, return the largest integer that only occurs once. If no integer occurs once, return -1.

- Use `.items()` to loop through a `Counter`, just like a regular `dict`.

---

```python
def largest_unique_number(arr: List[int]) -> int:
    return max([k for k, v in Counter(arr).items()
                if v == 1], default=-1)

print(largest_unique_number([5, 7, 3, 9, 4, 9, 8, 3, 1])) # 8
print(largest_unique_number([9, 9, 8, 8])) # -1
```

---

### Deque

The `deque` object is a double-ended queue that can be used similarly to a `list`. The main difference is that `deque` optimizes insertion and deletion from the front of the list.

- For example, with a `list`, if you want to insert an element to first position, you would use `insert(0, val)`. This can be a O(n) operation as opposed to a `deque`'s `appendleft()`, which is O(1).
- This also applies to deleting items from the first position. With a `list`, `pop(0)` may change both the size and position of the underlying data representation, therefore causing it to be a O(n) operation. With `deque`'s `popleft()`, one can gaurantee a constant O(1) time complexity.

---

```python
from collections import deque

arr = [1, 2, 3, 4, 5]
d = deque(arr)
print(d) # deque([1, 2, 3, 4, 5])

d.append(6)
d.appendleft(0)
print(d) # deque([0, 1, 2, 3, 4, 5, 6])

for _ in range(3):
    popped = d.popleft()
    print(f"{popped=}") # Python 3.8 feature
# popped=0
# popped=1
# popped=2
print(d) # deque([3, 4, 5, 6])
```

---

#### Rotate

The `deque` object has a method called `rotate(n)` that rotates the object _right_ `n` number of times. If `n` is negative, it will rotate _left_.

---

```python
arr = ['a', 'b', 'c', 'd', 'e']
d = deque(arr)
print(d) # deque(['a', 'b', 'c', 'd', 'e'])
d.rotate(2)
print(d) # deque(['d', 'e', 'a', 'b', 'c'])
d.rotate(7)
print(d) # deque(['b', 'c', 'd', 'e', 'a'])
d.rotate(-1)
print(d) # deque(['c', 'd', 'e', 'a', 'b'])
```

---

### DefaultDict

The `defaultdict` object is a `dict` with default values. It takes an argument in the constructor which can be be of `int`, `list`, or `set`.

---

```python
# When used with int, the default value is zero.
# This can be used to create a counter.
d = defaultdict(int)
string = "alphabet"
for char in string:
    d[char] += 1
print(d)
# defaultdict(<class 'int'>, {'a': 2, 'l': 1, 'p': 1, 'h': 1, 'b': 1, 'e': 1, 't': 1})

# When used with list, the default value is an empty list.
# This can be used to create a position map.
string = "alphabet"
d = defaultdict(list)
for i, e in enumerate(string):
    d[e].append(i)
print(d)
# defaultdict(<class 'list'>, {'a': [0, 4], 'l': [1], 'p': [2], 'h': [3], 'b': [5], 'e': [6], 't': [7]})

# This can also be used to represent a simple graph.
routes = [["oak", "sfo"], ["oak", "sjc"], ["sjc", "smf"], ["sfo", "lax"]]
graph = defaultdict(list)
for src_city, dst_city in routes:
    graph[src_city].append(dst_city)
    graph[dst_city].append(src_city)
print(graph)
# defaultdict(<class 'list'>, {'oak': ['sfo', 'sjc'], 'sfo': ['oak', 'lax'], 'sjc': ['oak', 'smf'], 'smf': ['sjc'], 'lax': ['sfo']})
```

### OrderedDict

The `OrderedDict` object is a `dict` that remembers the order that items were inserted. When iterating over an ordered dictionary, the items are returned in the order their keys were first added.

---

```python
from collections import OrderedDict
from string import ascii_lowercase

d = OrderedDict()
for char in ascii_lowercase:
    d[char] = ord(char)
for k, v in d.items():
    print(k, v)

# a 97
# b 98
# c 99
# ...
# x 120
# y 121
# z 122

# move_to_end() moves a key to the last position in dict
d.move_to_end('a')
d.move_to_end('z', False) # moves 'z' to front because False is set in last argument

for k, v in d.items():
    print(k, v)
# z 122
# b 98
# c 99
# ...
# x 120
# y 121
# a 97

# pop_item() removes last item
for _ in range(5):
    popped = d.popitem()
    print(f"{popped=}")
# popped=('a', 97)
# popped=('y', 121)
# popped=('x', 120)
# popped=('w', 119)
# popped=('v', 118)

for _ in range(5):
    popped = d.popitem(False) # When False is set, it removes from the front
    print(f"{popped=}")
# popped=('z', 122)
# popped=('b', 98)
# popped=('c', 99)
# popped=('d', 100)
# popped=('e', 101)

print(d)
# f 102
# g 103
# h 104
# ...
# s 115
# t 116
# u 117
```

---

**Interview Question**

#### Implement a LRU (Least Recently Used) cache.

---

```python
class LRUCache:
    def __init__(self, capacity: int):
        self.size = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> str:
        """
        Gets the value stored at given key. Moves key to the end
        of the cache queue.
        """
        if key not in self.cache:
            return -1
        val = self.cache[key]
        self.cache.move_to_end(key)
        return val

    def put(self, key: int, val: str):
        """
        Inserts a key, value pair into the cache if it does not exist.
        Otherwise, updates the current key. Moves key to the end
        of the cache queue.
        """
        if key in self.cache:
            del self.cache[key]
        self.cache[key] = val
        if len(self.cache) > self.size:
            self.cache.popitem(last=False)
```

---

_Author: Tu Vo_
