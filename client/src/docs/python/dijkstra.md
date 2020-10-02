## Dijkstra's Shortest Path Algorithm

---

Dijkstra's algorithm is an iterative algorithm that finds the shortest path from one node to another node in a weighted graph.

- It uses a priority queue to keep track of the smallest distance it has found so far.
- It uses a Breadth-First Search (BFS) approach to explore nodes to add to queue.

---

### Vertex

- Each vertex will keep track of:
  - adjacent nodes
  - shortest distance from start so far
    - default value will be infinite
  - boolean if it has been visited before (prevents duplicate work and infinite loops)
  - previous node with shortest distance from start so far
    - default is None

---

```python
from typing import TypeVar


class Vertex:
    def __init__(self, node: TypeVar("Vertex")):
        self.val = node
        self.adjacent = {}
        self.distance = float("inf")
        self.visited = False
        self.previous = None

    def add_neighbor(self, neighbor, weight=0):
        self.adjacent[neighbor] = weight

    def get_weight(self, neighbor):
        return self.adjacent[neighbor]
```

---

### Graph

- Standard un-directed graph

---

```python
class Graph:
    def __init__(self):
        self.vert_dict = {}

    def __iter__(self):
        return iter(self.vert_dict.values())

    def add_vertex(self, node):
        new_vertex = Vertex(node)
        self.vert_dict[node] = new_vertex
        return new_vertex

    def get_vertex(self, n):
        return self.vert_dict[n]

    def add_edge(self, frm, to, cost=0):
        if frm not in self.vert_dict:
            self.add_vertex(frm)
        if to not in self.vert_dict:
            self.add_vertex(to)
        self.vert_dict[frm].add_neighbor(self.vert_dict[to], cost)
        self.vert_dict[to].add_neighbor(self.vert_dict[frm], cost)
```

---

### Algorithm

---

```python
import heapq
from collections import deque
from typing import TypeVar, Deque

class Dijkstra:

    @staticmethod
    def shortest_path(graph: TypeVar("Graph"),
                      start: TypeVar("Vertex"),
                      target: TypeVar("Vertex")):
        """
        Finds shortest path on graph between start and target vertices.
        """
        # Set the distance for the starting node to zero
        start.distance = 0

        # Put tuple pair into the priority queue
        p_queue = [(0, start.val)]

        while p_queue:
            # Pops the node with the smallest distance
            distance, val = heapq.heappop(p_queue)
            print(f"Current distance = {distance}, node = {val}")
            current = graph.get_vertex(val)
            # If node equals target, return path
            if current == target:
                path = Dijkstra.build_path(target, deque(target.val))
                print(f"The shortest path is {path}, {target.distance}")
                return
            # If node has previously been visited, continue
            if current.visited:
                continue
            # Mark current node as visited
            current.visited = True

            for adjacent in current.adjacent:
                print(f"  Checking neighbor: {adjacent.val}")
                # If node has previously been visited, continue
                if adjacent.visited:
                    continue
                # Get current distance + distance to next node
                new_dist = distance + current.get_weight(adjacent)
                # Compare to adjacent node's shortest distance to start so far
                # If this is first time seeing node, the value will be infinite
                if new_dist < adjacent.distance:
                    # Set new shortest distance so far
                    adjacent.distance = new_dist
                    # Add node to priority queue
                    heapq.heappush(p_queue, (adjacent.distance, adjacent.val))
                    # Set previous node to current node
                    adjacent.previous = current
                    print(
                        f"    Updating : {current.val} to {adjacent.val} => {adjacent.distance}")

    @staticmethod
    def build_path(vertex: TypeVar("Vertex"), path: Deque[str]):
        """
        Builds shortest path from vertex.
        """
        if vertex.previous:
            path.appendleft(vertex.previous.val)
            return Dijkstra.build_path(vertex.previous, path)
        return path
```

---

### Test Case

---

```python
graph = Graph()
graph.add_edge('a', 'b', 7)
graph.add_edge('a', 'c', 9)
graph.add_edge('a', 'f', 14)
graph.add_edge('b', 'c', 10)
graph.add_edge('b', 'd', 15)
graph.add_edge('c', 'd', 11)
graph.add_edge('c', 'f', 2)
graph.add_edge('d', 'e', 6)
graph.add_edge('d', 'g', 12)
graph.add_edge('e', 'f', 9)
graph.add_edge('e', 'g', 16)

print("Graph data:")
for node in graph:
    for neighbor in node.adjacent.keys():
        print(f"{node.val}, {neighbor.val}, {node.get_weight(neighbor)}")

Dijkstra.shortest_path(graph, graph.get_vertex('a'), graph.get_vertex('g'))

"""
Graph data:
a, b, 7
a, c, 9
a, f, 14
b, a, 7
b, c, 10
b, d, 15
c, a, 9
c, b, 10
c, d, 11
c, f, 2
f, a, 14
f, c, 2
f, e, 9
d, b, 15
d, c, 11
d, e, 6
d, g, 12
e, d, 6
e, f, 9
e, g, 16
g, d, 12
g, e, 16

Current distance = 0, node = a
  Checking neighbor: b
    Updating : a to b => 7
  Checking neighbor: c
    Updating : a to c => 9
  Checking neighbor: f
    Updating : a to f => 14
Current distance = 7, node = b
  Checking neighbor: a
  Checking neighbor: c
  Checking neighbor: d
    Updating : b to d => 22
Current distance = 9, node = c
  Checking neighbor: a
  Checking neighbor: b
  Checking neighbor: d
    Updating : c to d => 20
  Checking neighbor: f
    Updating : c to f => 11
Current distance = 11, node = f
  Checking neighbor: a
  Checking neighbor: c
  Checking neighbor: e
    Updating : f to e => 20
Current distance = 14, node = f
Current distance = 20, node = d
  Checking neighbor: b
  Checking neighbor: c
  Checking neighbor: e
  Checking neighbor: g
    Updating : d to g => 32
Current distance = 20, node = e
  Checking neighbor: d
  Checking neighbor: f
  Checking neighbor: g
Current distance = 22, node = d
Current distance = 32, node = g

The shortest path is deque(['a', 'c', 'd', 'g']), 32
"""
```

---

_Author: Tu Vo_
