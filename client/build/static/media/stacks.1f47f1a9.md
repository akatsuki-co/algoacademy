## Stacks

---

A stack is a data structure where elements are inserted and removed based on a last-in first-out (LIFO) principle.

- A helpful way to visualize a stack is to imagine a pancake "stack" where you eat things from the top or most recently added layer and work your way down to the oldest pancake.
- In C, a singly linked-list is generally used to represent a stack.

---

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct stack_node
{
    int value;
    struct stack_node *next;
} node;

node *create_node(int n)
{
    node *new_node = (node *)malloc(sizeof(node));
    if (!new_node)
        return (NULL);

    new_node->n = n;
    new_node->next = NULL;
    return new_node;
}

```

---

### Check if a stack is empty

- Runtime: O(1)

---

```c
int is_empty(node *root)
{
    return !root;
}

```

---

### Push a node onto a stack

- Runtime: O(1)

---

```c
void push(node **root, int value)
{
    node *new_node = create_node(value);
    new_node->next = *root;
    *root = new_node;
}

```

---

### Pop a node out of a stack

- Runtime: O(1)

---

```c
int pop(node **root)
{
    node *temp;
    int popped;

    if (is_empty(*root))
        exit(1);
    temp = *root;
    popped = temp->value;
    *root = temp->next;
    free(temp);
    return popped;
}
```

---

### Peek

- Runtime: O(1)

```c
int peek(node *root)
{
    if (is_empty(root))
        exit(1);
    return root->n;
}

```

---

_Author: Tu Vo_
