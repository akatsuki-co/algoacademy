## Disjoint Sets

---

A disjoint set (also known as union-find) is a data structure that tracks a set of elements partitioned into non-overlapping subsets. It provides near-constant-time operations to add new sets, merge existing sets and determine if elements are in the same set.

---

```java
class UnionFind {
    int[] parent;

    public UnionFind(int size) {
        parent = new int[size];
        for (int i = 0; i < size; i++) {
            parent[i] = i;
        }
    }

    public void union(int x, int y) {
        parent[find(x)] = parent[find(y)];
    }

    public int find(int x) {
        if (x != parent[x]) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
}
```

---

_Author: Tu Vo_
