## Graphs

A graph is an abstract data structure that consists of nodes (or vertices) connected to one another through edges.

- A _undirected_ graph is a graph where its edges are bidirectional whereas a _directed graph_ is one where its edges only flow in one direction.
- Vertices can be adjacent to any number of other vertices. This "adjacency list" is commonly stored in an array or hash table within each vertex.
- Graphs are commonly used to represent networks and or relationships between many entities.

---

```js
class GraphNode {
  constructor(value) {
    this.value = value
    this.adjacents = []
  }

  // Adds an adjacent node.
  addAdjacent(node) {
    this.adjacents.push(node)
  }

  // Removes an adjacent node.
  removeAdjacent(node) {
    const index = this.adjacents.indexOf(node)
    if (index > -1) this.adjacents.splice(index, 1)
  }
}

class Graph {
  constructor(directed = true) {
    this.nodes = {}
    this.directed = directed
  }

  // Adds a new vertex to graph, or return existing one.
  addVertex(value) {
    if (this.nodes[value]) return this.nodes[value]
    else {
      const node = new GraphNode(value)
      this.nodes[value] = node
      return node
    }
  }

  // Removes vertex from graph
  removeVertex(value) {
    const current = this.nodes[value]
    if (current)
      // Removes edges connected to vertex.
      for (const node of Object.values(this.nodes)) node.removeAdjacent(current)
    delete this.nodes[value]
    return current
  }

  // Adds an edge between two vertexes.
  addEdge(source, destination) {
    const sourceNode = this.addVertex(source)
    const destinationNode = this.addVertex(destination)
    sourceNode.addAdjacent(destinationNode)
    // Bi-directional graphs.
    if (!this.directed) destinationNode.addAdjacent(sourceNode)
    return [sourceNode, destinationNode]
  }

  // Removes an edge between two vertexes
  removeEdge(source, destination) {
    const sourceNode = this.nodes[source]
    const destinationNode = this.nodes[destination]
    if (sourceNode && destinationNode)
      sourceNode.removeAdjacent(destinationNode)
    if (!this.directed) destinationNode.removeAdjacent(sourceNode)
    return [sourceNode, destinationNode]
  }
}
```

---

_Author: Tu Vo_
