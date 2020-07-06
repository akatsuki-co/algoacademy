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

## Extract the root from from a heap

---

- Time complexity: O(log(n))
- In order to extract the root, there is a series of steps one must follow:
  1. Save root's value in temporary variable `t`
  2. Find last node in tree
  3. Assign root's value to last node's value
  4. Free last node
  5. Bubble down root
  6. Return `t`
- In order to find the location of the last node, take the following steps:
  1. Find size of tree
  2. Using binary representation of size, use to loop from the root
  3. Skip the first digit. Otherwise, if the digit is 1, go right in tree. Otherwise, go left.
  4. When the loop is done, wherever the pointer ends up is where the last node should be.
  5. For example, a heap of size 5. 5 in binary is 101. Skipping first digit, the number is 01. The direction one should take from the root is left once and then right once.

```c
int heap_size(heap_node *tree)
{
	if (!tree)
		return (0);
	return (1 + heap_size(tree->left) + heap_size(tree->right));
}

int free_last(heap_node **root)
{
	int size, end = 0, bits, flag = 0;
	heap_node *tmp, *target;

	tmp = *root;
	size = heap_size(*root);
	for (bits = sizeof(size) * 8 - 1; bits >= 0; bits--)
	{
		if (bits == 0)
		{
			if ((size >> bits) & 1)
			{
				target = tmp->right;
				tmp->right = NULL;
			}
			else
			{
				target = tmp->left;
				tmp->left = NULL;
			}
			end = target->n;
			free(target);
		}
		if ((size >> bits) & 1)
		{
			if (flag)
				tmp = tmp->right;
			flag = 1;
		}
		else if (flag)
			tmp = tmp->left;
	}
	return (end);
}

void xor_swap(int *a, int *b)
{
	*a ^= *b;
	*b ^= *a;
	*a ^= *b;
}

void bubble_down(heap_node *node)
{
	int max;

	max = node->n;
	if (node->left && node->left->n > max)
		max = node->left->n;
	if (node->right && node->right->n > max)
		max = node->right->n;
	if (max != node->n)
	{
		if (max == node->left->n)
		{
			xor_swap(&node->n, &node->left->n);
			bubble_down(node->left);
		}
		else
		{
			xor_swap(&node->n, &node->right->n);
			bubble_down(node->right);
		}
	}
}

int heap_extract(heap_node **root)
{
	int res;

	if (!root || !*root)
		return (0);
	res = (*root)->n;
	if (!(*root)->left && !(*root)->right)
	{
		free(*root);
		*root = NULL;
		root = NULL;
		return (res);
	}
	(*root)->n = free_last(root);
	bubble_down(*root);
	return (res);
}
```

---

_Author: Tu Vo_
