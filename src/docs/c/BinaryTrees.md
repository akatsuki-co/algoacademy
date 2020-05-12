## Binary Trees

---

A binary tree is a data structure that is composed of nodes that have at most two children. The top of the binary tree is referred to as the root.

- Nodes can be also constructed with or without references to the parent, that is dependent on the user. Having a reference to the parent node makes tree traversal easier at the cost of extra space.
- A leaf is a node that has no children (\\*left and *right point to NULL).

---

```c
#include <stdio.h>
#include <stdlib.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))

typedef struct binary_tree_node
{
	int n;
	struct binary_tree_node *parent;
	struct binary_tree_node *left;
	struct binary_tree_node *right;
} bt_node;

bt_node *create_node(bt_node *parent, int value)
{
	bt_node *bt;

	bt = calloc(1, sizeof(bt_node));
	if (!bt)
		return (NULL);
	bt->parent = parent;
	bt->n = value;
	return bt;
}
```

---

### Tree Traversals

---

#### Preorder

---

```c
void preorder_traversal(const bt_node *tree)
{
	if (!tree)
		return;
	printf("%i ", tree->n);
	preorder_traversal(tree->left);
	preorder_traversal(tree->right);
}
```

---

#### Inorder

---

```c
void inorder_traversal(const bt_node *tree)
{
	if (!tree)
		return;
    inorder_traversal(tree->left);
    printf("%i ", tree->n);
	inorder_traversal(tree->right);
}
```

---

#### Postorder

---

```c
void postorder_traversal(const bt_node *tree)
{
	if (!tree)
		return;
    postorder_traversal(tree->left);
    postorder_traversal(tree->right);
    printf("%i ", tree->n);
}
```

--- 

### Find the height of a node

- The height of a node is the max distance it is to its furthest leaf child.

---

```c
int bt_height(const bt_node *tree)
{
	int left, right;

	if (!tree)
		return 0;
	left = bt_height(tree->left);
	right = bt_height(tree->right);
	return (MAX(left, right) + 1);
}

```

--- 

### Find the depth of a node

- The depth of a node is its distance to the tree's root.

---

```c
int bt_depth(const bt_node *tree)
{
	int count = 0;

	if (!tree)
		return 0;
	while (tree->parent)
	{
		count++;
		tree = tree->parent;
	}
	return count;
}
```

---

### Find the size of a tree

- The size of a tree is the number of total nodes in the tree.

---

```c
int bt_size(const bt_node *tree)
{
	if (!tree)
		return 0;
	return (1 + bt_size(tree->left) + bt_size(tree->right));
}
```

---

### Determine if a tree is balanced

- A tree is balanced if the difference between the left and right side is no greater than 1.
- There are two approaches:

#### Top down

 - Time complexity: O(n\\**2) because the height of each node is being recalculated at every level.

---

```c
int is_balanced(bt_node *tree)
{
    int left_height, right_height;

    if (!tree)
        return 1;
    left_height = bt_height(tree->left);
    right_height = bt_height(tree->right);
    return (abs(left_height - right_height) <= 1 &&
        is_balanced(tree->right) &&
        is_balanced(tree->left));
}
```

---

#### Bottom Up

- Time complexity: O(n) because each node gets visited once. The function also short circuits if an imbalance is found.

---

\`\`\`c
int dfs(bt_node *tree)
{
    int left, right;

    if (!tree)
        return 0;
    left = dfs(tree->left);
    if (left == -1)
        return -1;
    right = dfs(tree->right);
    if (right == -1)
        return -1;
    if (abs(left - right) > 1)
        return -1;
    return MAX(left, right) + 1;
}

int is_balanced(bt_node *tree)
{
    return dfs(tree) != -1;
}
\`\`\`

---

_Author: Tu Vo_

`

const BinaryTrees = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default BinaryTrees
