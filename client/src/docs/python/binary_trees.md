## Binary Trees

---

A binary tree is a data structure that is composed of nodes that have at most two children. The top of the binary tree is referred to as the root.

- Nodes can be also constructed with or without references to the parent, that is dependent on the user. Having a reference to the parent node makes tree traversal easier at the cost of extra space.
- A leaf is a node that has no children (\*left and \*right point to NULL).

---

```python
class TreeNode:
    def __init__(self, value: int):
        self.value = value
        self.parent = None
        self.left = None
        self.right = None

    def add_left(self, value: int):
        """
        Adds a node to the left.
        """
        new_node = TreeNode(value)
        new_node.parent = self
        self.left = new_node
        return new_node

    def add_right(self, value: int):
        """
        Adds a node to the right.
        """
        new_node = TreeNode(value)
        new_node.parent = self
        self.right = new_node
        return new_node
```

---

### Tree Traversals

---

#### Preorder

---

```python
def pre_order_traversal(node: TreeNode):
    if not node:
        return
    print(node.value)
    pre_order_traversal(node.left)
    pre_order_traversal(node.right)
```

---

#### Inorder

---

```python
def in_order_traversal(node: TreeNode):
    if not node:
        return
    in_order_traversal(node.left)
    print(node.value)
    in_order_traversal(node.right)
```

---

#### Postorder

---

```python
def post_order_traversal(node: TreeNode):
    """
    Visits child nodes before current node.
    """
    if not node:
        return
    post_order_traversal(node.left)
    post_order_traversal(node.right)
    print(node.value)
```

---

### Find the height of a node

- The height of a node is the max distance it is to its furthest leaf child.

---

```python
def bt_height(node: TreeNode) -> int:
    if not node:
        return 0
    left = bt_height(node.left)
    right = bt_height(node.right)
    return max(left, right) + 1
```

---

### Find the depth of a node

- The depth of a node is its distance to the tree's root.

---

```python
def bt_depth(node: TreeNode) -> int:
    if not node:
        return 0
    count = 0
    while node.parent:
        count += 1
        node = node.parent
    return count
```

---

### Find the size of a tree

- The size of a tree is the number of total nodes in the tree.

---

```python
def bt_size(node: TreeNode) -> int:
    if not node:
        return 0
    return 1 + bt_size(node.left) + bt_size(node.right)
```

---

### Determine if a tree is balanced

- A tree is balanced if the difference between the left and right side is no greater than 1.
- There are two approaches:

#### Top down

- Time complexity: O(n\\\*\*2) because the height of each node is being recalculated at every level.

---

```python
def is_balanced(node: TreeNode) -> bool:
    if not node:
        return True
    left_height = bt_height(node.left)
    right_height = bt_height(node.right)
    return abs(left_height - right_height) <= 1 and \
           is_balanced(node.right) and \
           is_balanced(node.left)
```

---

#### Bottom Up

- Time complexity: O(n) because each node gets visited once. The function also short circuits if an imbalance is found.

---

```python
def dfs(node: TreeNode) -> int:
    if not node:
        return 0
    left = dfs(node.left)
    if (left == -1):
        return -1
    right = dfs(node.right)
    if right == -1:
        return -1
    if abs(left - right) > 1:
        return -1
    return max(left, right) + 1

def is_balanced(node: TreeNode) -> bool:
    return dfs(node) != -1
```

---

_Author: Tu Vo_
