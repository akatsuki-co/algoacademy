## Sets

---

A set is a data structure that maps keys to values, similarly to a hash table. The difference is that the values in a set can either be true or false.

- It is implemented with an array that uses a hash function to compute an index for its keys.
- In the event that there is a collision (duplicate keys), there are several strategies that can be used to handle it:
  1. Separate chaining - a linked list (or other data structure) is used to store duplicate key/value pairs
  2. Open addressing - the next empty index in the array is used to store duplicate key/value pairs

---

### Initialize a set

- Calloc initializes all bytes in the allocated storage to zero

---

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct set_node
{
	char *key;
	int value;
	struct set_node *next;
} node;

typedef struct set_t
{
	unsigned int size;
	node **array;
} set;

set *create_set(unsigned int size)
{
	set *s;

	if (!size)
		return NULL;
	s = calloc(1, sizeof(set));
	if (!s)
		return NULL;
	s->size = size;
	s->array = calloc(size, sizeof(node **));
	if (!s->array)
	{
		free(s);
		return NULL;
	}
	return s;
}
```

---

### Implement a hash function

- We will be using the djb2 algorithm

---

```c
unsigned int hash_djb2(char *str)
{
	unsigned int hash;
	int c;

    // use of prime number
	hash = 5381;
	while ((c = *str++))
		hash = ((hash << 5) + hash) + c; // hash * 33 + c
	return hash;
}

```

---

### Generate a key

---

```c
unsigned int generate_key(char *key, unsigned int size)
{
	return hash_djb2(key) % size;
}

```

---

### Add a key

- We will be using separate chaining to handle collisions
- Runtime: O(1)

---

```c
void add(set *s, char *key)
{
	unsigned int index;
	node *curr, *new_node;

	if (!s || !key)
		exit(1);
	index = generate_key(key, s->size);
	curr = s->array[index];
	while (curr)
	{
        // key already exists
		if (strcmp(curr->key, key) == 0)
			return;
		curr = curr->next;
	}
    // add new key/value
	new_node = malloc(sizeof(node));
	new_node->key = strdup(key);
	new_node->value = 1;
	new_node->next = s->array[index];
	s->array[index] = new_node;
}
```

---

### Check if a set has a key

- Runtime: O(1)

---

```c
int has(set *s, char *key)
{
	unsigned int index;
	node *curr;

	if (!s || !key || !*key)
		return 0;
	index = generate_key(key, s->size);
	curr = s->array[index];
	while (curr)
	{
        // key exists
		if (strcmp(curr->key, key) == 0)
			return 1;
		curr = curr->next;
	}
    // key doesn't exist
	return 0;
}
```

---

### Delete a set

---

```c
void delete_set(set *s)
{
	int i;
	node *curr, *tmp;

	if (!s)
		return;
	for (i = 0; i < s->size; i++)
		if (s->array[i])
		{
			curr = s->array[i];
			while (curr)
			{
				tmp = curr;
				free(curr->key);
				free(&curr->value);
				curr = curr->next;
				free(tmp);
			}
		}
	free(s->array);
	free(s);
}
```

---

_Author: Tu Vo_
