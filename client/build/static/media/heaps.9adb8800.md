## Heaps

---

A heap is a tree-based data structure in which the tree is a complete binary tree. Being complete means every level, except possibly the last, is completely filled, and all nodes are as far left as possible. Heaps can be of two types:

- min-heap: the root will be the minimum among all of it's children. This is recursively true of all of its child nodes.
- max-heap: the root will be the maximum among all of it's children. This is recursively true of all of its child nodes.

Heaps can be represented with either arrays or binary trees. Because changing array sizes requires reallocating memory in C, it may be easier to use a binary tree.

---

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct binary_tree_node
{
    int n;
    struct binary_tree_node *parent;
    struct binary_tree_node *left;
    struct binary_tree_node *right;
} heap_node;

```

---

## Insert a node into a heap

---

- Time complexity: O(log(n))
- In order to find the correct position in the tree to insert a heap node, there is a formula using bit manipulation:
  1. Find size of binary tree
  2. Add 1 to size
  3. Convert size to binary representation. Let's call this b.
  4. Create a pointer at root. Skipping first digit, loop through said b.
  5. If the digit is 1, go right in tree. Otherwise, go left.
  6. When the loop is done, wherever the pointer ends up is where the insert should happen.
  7. For example, a heap of size 5. Size + 1 = 6. 6 in binary is 110. Skipping first digit, the number is 10. The direction one should take from the root is right once and then left once.

```c
#include <string.h>

int heap_size(heap_node *tree)
{
	if (!tree)
		return (0);
	return (1 + heap_size(tree->left) + heap_size(tree->right));
}

char *convert(unsigned int num)
{
	static char buffer[50];
	char *ptr;

	ptr = &buffer[49];
	*ptr = 0;
	do {
		*--ptr = (num % 2) + '0';
		num /= 2;
	} while (num);
	return ptr;
}

void insert(heap_node **root, heap_node *node)
{
	char c, *binary;
	unsigned int i, size;
	heap_node *tmp = NULL;

	tmp = *root;
	size = heap_size(tmp) + 1;
	binary = convert(size);
	for (i = 1; i < strlen(binary); i++)
	{
		c = binary[i];
		if (i == strlen(binary) - 1)
		{
			if (c == '1')
				tmp->right = node;
			else if (c == '0')
				tmp->left = node;
			node->parent = tmp;
		}
		else if (c == '1')
			tmp = tmp->right;
		else if (c == '0')
			tmp = tmp->left;
	}
}

heap_node *heap_insert(heap_node **root, int value)
{
	heap_node *new_node = NULL;
	int tmp;

	if (!root)
		return (NULL);
	new_node = create_node(NULL, value);
	if (!*root)
	{
		*root = new_node;
		return (new_node);
	}
	insert(root, new_node);
	while (new_node->parent && new_node->n > new_node->parent->n)
	{
		tmp = new_node->parent->n;
		new_node->parent->n = new_node->n;
		new_node->n = tmp;
		new_node = new_node->parent;
	}
	return (new_node);
}
```

---

_Author: Tu Vo_
