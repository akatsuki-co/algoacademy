## Disjoint Sets

---

A disjoint set (also known as union-find) is a data structure that tracks a set of elements partitioned into non-overlapping subsets. It provides near-constant-time operations to add new sets, merge existing sets and determine if elements are in the same set.

---

```python
class DSU:
    def __init__(self):
        self.parents = {}
        self.count = 0

    def find(self, x: int) -> int:
        """
        Finds parent of element with path compression functionality.
        Amortized O(1) time complexity.
        """
        if self.parents.get(x) != x:
            self.parents[x] = self.find(self.parents.get(x))
        return self.parents.get(x)

    def union(self, x: int, y: int):
        """
        Combines parent of two elements if they do not match.
        Amortized O(1) time complexity.
        """
        par_x = self.find(x)
        par_y = self.find(y)
        if par_x != par_y:
            self.count -= 1
            self.parents[par_x] = par_y

    def add(self, x: int):
        """
        Adds an element into DSU.
        O(1) time complexity.
        """
        if x in self.parents:
            return
        self.parents[x] = x
        self.count += 1

    def __repr__(self):
        return f"parents: {self.parents}\ncount: {self.count}"

dsu = DSU()
for i in range(5):
    dsu.add(i)
print(dsu)
# parents: {0: 0, 1: 1, 2: 2, 3: 3, 4: 4}
# count: 5
# 0 1 2 3 4
# | | | | |
# 0 1 2 3 4

dsu.union(0, 4) # combine 0 and 4
print(dsu)
# parents: {0: 4, 1: 1, 2: 2, 3: 3, 4: 4}
# count: 4
# 0 and 4 belong to same set
# 4    1 2 3
# |\   | | |
# 0 4  1 2 3

dsu.union(2, 3)
print(dsu)
# parents: {0: 4, 1: 1, 2: 3, 3: 3, 4: 4}
# count: 3
# 2 and 3 belong to same set
dsu.union(0, 2)
print(dsu)
# parents: {0: 4, 1: 1, 2: 3, 3: 3, 4: 3}
# count: 2
#   3
#  /|\
# 3 4 2  1
#   |    |
#   0    1

dsu.union(1, 3)
print(dsu)
# parents: {0: 4, 1: 3, 2: 3, 3: 3, 4: 3}
# count: 1
#   3 - 1
#  /|\
# 3 4 2
#   |\
#   0 4
```

---

_Author: Tu Vo_
