import React from "react"
import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `

## Queues

---

A queue is a data structure where elements are inserted and removed based on a first-in first-out (LIFO) principle.\n
- A helpful way to visualize a queue is to imagine people in a line at an amusement park. People who line up first gets served first.
- In C, a singly linked-list with two pointers that reference the head and tail of the list is used to represent a queue.

---

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

typedef struct queue_node
{
    int n;
    struct queue_node *next;
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

typedef struct queue {
    node* head;
    node* tail;
} Queue;

Queue* create_queue()
{
    Queue *q = malloc(sizeof(Queue));
    if (!q)
        return NULL;
    q->head = NULL;
    q->tail = NULL;
    return q;
}

\`\`\`

---

### Check if a queue is empty\n
- Runtime: O(1)

---

\`\`\`c
int is_empty(Queue *q)
{
    return !q->head;
}

\`\`\`

---

### Enqueue a node\n
- Runtime: O(1)

---

\`\`\`c
void enqueue(Queue* q, int n)
{
    node* new_node = create_node(n);
    if (is_empty(q))
    {
        q->head = new_node;
        q->tail = new_node; 
        return;
    }
    q->tail->next = new_node;
    q->tail = new_node;
}

\`\`\`

---

### Dequeue a node\n
- Runtime: O(1)

---

\`\`\`c
int dequeue(Queue *q)
{
    node *tmp;
    int popped;

    if (is_empty(q))
        exit(1);
    tmp = q->head;
    popped = tmp->n;
    q->head = q->head->next;
    if (is_empty(q))
        q->tail = NULL;
    free(tmp);
    return popped;
}
\`\`\`

---

### Peek
- Runtime: O(1)

\`\`\`c
int peek(node *root)
{
    if (is_empty(root))
        exit(1);
    return root->n;
}

\`\`\`

---

**Interview Question**

### Implement a queue with two stacks\n
- Enqueue: O(1) runtime
- Dequeue: amortized O(1) runtime
- Peek: amortized O(1) runtime

---

\`\`\`c  
#include "stack.h"

typedef struct queue_with_stacks
{
    node *oldest;
    node *newest;
} queue;

void enqueue(queue *q, int value)
{
    push(&q->newest, value);
}

void shift_stacks(queue *q)
{
    // Shift all elements from oldest stack to newest stack.
    if (is_empty(q->oldest))
        while (!is_empty(q->newest))
            push(&q->oldest, pop(&q->newest));
}

int dequeue(queue *q)
{
    shift_stacks(q);
    return pop(&q->oldest);
}

int peek(queue *q)
{
    shift_stacks(q);
    return peek(q->oldest);
}

\`\`\`

---

_Author: Tu Vo_

`

const Queues = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default Queues
