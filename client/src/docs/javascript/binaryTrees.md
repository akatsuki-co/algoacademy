## Binary Trees

---

A binary tree is a data structure that is composed of nodes that have at most two children. The top of the binary tree is referred to as the root.

- Nodes can be also constructed with or without references to the parent, that is dependent on the user. Having a reference to the parent node makes tree traversal easier at the cost of extra space.
- A leaf is a node that has no children (\*left and \*right point to NULL).

---

```js
class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }

  /**
   * Adds a node to the left.
   */
  addLeft(value) {
    const new_node = new TreeNode(value)
    new_node.parent = this
    this.left = new_node
    return new_node
  }
  /**
   * Adds a node to the right.
   */
  addRight(value) {
    const new_node = new TreeNode(value)
    new_node.parent = this
    this.right = new_node
    return new_node
  }
}
```

---

### Tree Traversals

---

#### Preorder

---

```js
const preOrderTraversal = (node) => {
  if (!node) return
  console.log(node.value)
  preOrderTraversal(node.left)
  preOrderTraversal(node.right)
}
```

---

#### Inorder

---

```js
const inOrderTraversal = (node) => {
  if (!node) return
  inOrderTraversal(node.left)
  console.log(node.value)
  inOrderTraversal(node.right)
}
```

---

#### Postorder

---

```js
const postOrderTraversal = (node) => {
  if (!node) return
  postOrderTraversal(node.left)
  postOrderTraversal(node.right)
  console.log(node.value)
}
```

---

### Find the height of a node

- The height of a node is the max distance it is to its furthest leaf child.

---

```js
const btHeight = (node) => {
  if (!node) return 0
  const left = btHeight(node.left)
  const right = btHeight(node.right)
  return Math.max(left, right) + 1
}
```

---

### Find the depth of a node

- The depth of a node is its distance to the tree's root.

---

```js
const btDepth = (node) => {
  if (!node) return 0
  let count = 0
  while (node.parent) {
    count++
    node = node.parent
  }
  return count
}
```

---

### Find the size of a tree

- The size of a tree is the number of total nodes in the tree.

---

```js
const btSize = (node) => {
  if (!node) return 0
  return 1 + btSize(node.left) + btSize(node.right)
}
```

---

### Determine if a tree is balanced

- A tree is balanced if the difference between the left and right side is no greater than 1.
- There are two approaches:

#### Top down

- Time complexity: O(n\\\*\*2) because the height of each node is being recalculated at every level.

---

```js
const isBalanced = (node) => {
  if (!node) return true
  const leftHeight = btHeight(node.left)
  const rightHeight = btHeight(node.right)
  return (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    isBalanced(node.right) &&
    isBalanced(node.left)
  )
}
```

---

#### Bottom Up

- Time complexity: O(n) because each node gets visited once. The function also short circuits if an imbalance is found.

---

```js
const dfs = (node) => {
  if (!node) return 0
  const left = dfs(node.left)
  if (left == -1) return -1
  const right = dfs(node.right)
  if (right == -1) return -1
  if (Math.abs(left - right) > 1) return -1
  return Math.max(left, right) + 1
}

const isBalanced = (node) => {
  return dfs(node) != -1
}
```

---

_Author: Tu Vo_
