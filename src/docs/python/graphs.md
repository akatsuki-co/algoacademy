## Graphs

A graph is an abstract data structure that consists of nodes (or vertices) connected to one another through edges.

- A _undirected_ graph is a graph where its edges are bidirectional whereas a _directed graph_ is one where its edges only flow in one direction.
- Vertices can be adjacent to any number of other vertices. This "adjacency list" is commonly stored in an array or hash table within each vertex.
- Graphs are commonly used to represent networks and or relationships between many entities.

---

```python
from typing import List

class GraphNode:
    def __init__(self, value: int):
        self.value = value
        self.adjacent_list = []

    def add_adjacent(self, node: GraphNode):
        """
        Adds an adjacent node.
        """
        self.adjacent_list.append(node)

    def remove_adjacent(self, node: GraphNode):
        """
        Removes an adjacent node.
        """
        self.adjacent_list.remove(node)

    def __str__(self) -> str:
        """
        String representation.
        """
        string = "GraphNode = {\n" +\
                 f"\tvalue: {self.value}\n" +\
                 f"\tadjacents: {[node.value for node in self.adjacent_list]}\n" +\
                 "}"
        return string


class Graph:
    def __init__(self, directed: bool = True):
        self.nodes = {}
        self.directed = directed

    def add_vertex(self, value: int) -> GraphNode:
        """
        Adds a new vertex to graph, or return existing one.
        """
        if value in self.nodes:
            return self.nodes[value]
        else:
            new_vertex = GraphNode(value)
            self.nodes[value] = new_vertex
            return new_vertex

    def remove_vertex(self, value: int) -> GraphNode:
        """
        Removes vertex from graph.
        """
        vertex = self.nodes[value]
        if vertex:
            for v in self.nodes.values():
                # Removes edges connected to vertex.
                if vertex in v.adjacent_list:
                    v.remove_adjacent(vertex)
        del self.nodes[value]
        return vertex

    def add_edge(self, source: GraphNode, dest: GraphNode) -> List[GraphNode]:
        """
        Adds an edge between two vertexes.
        """
        source_node = self.add_vertex(source)
        dest_node = self.add_vertex(dest)
        source_node.add_adjacent(dest_node)
        # Bi-directional graphs.
        if not self.directed:
            dest_node.add_adjacent(source_node)
        return [source_node, dest_node]

    def remove_edge(self, source: GraphNode, dest: GraphNode) -> List[GraphNode]:
        """
        Removes an edge between two vertexes.
        """
        source_node = self.nodes[source]
        dest_node = self.nodes[dest]
        if source_node and dest_node:
            source_node.remove_adjacent(dest)
        if not self.directed:
            dest_node.remove_adjacent(source)
        return [source_node, dest_node]

    def __str__(self) -> str:
        """
        String representation.
        """
        string = "Graph = {\n" +\
                 f"\tdirected: {self.directed}\n" +\
                 f"\tnodes: {[k.value for k in self.nodes.values()]}\n" +\
                 "}"
        return string

```

---

_Author: Tu Vo_
