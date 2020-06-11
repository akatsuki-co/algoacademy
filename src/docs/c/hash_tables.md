## Hash Tables

---

A hash table is a data structure that maps keys to values.

- It is implemented with an array that uses a hash function to compute an index for its keys.
- In the event that there is a collision (duplicate keys), there are several strategies that can be used to handle it:
  1. Separate chaining - a linked list (or other data structure) is used to store duplicate key/value pairs
  2. Open addressing - the next empty index in the array is used to store duplicate key/value pairs

---

### Initialize a hash table

- Calloc initializes all bytes in the allocated storage to zero

---

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct hash_node
{
	char *key;
	char *value;
	struct hash_node *next;
} node;

typedef struct hash_table_t
{
	unsigned int size;
	node **array;
} hash_table;

hash_table *create_hash_table(unsigned int size)
{
	hash_table *ht;

	if (!size)
		return NULL;
	ht = calloc(1, sizeof(hash_table));
	if (!ht)
		return NULL;
	ht->size = size;
	ht->array = calloc(size, sizeof(node **));
	if (!ht->array)
	{
		free(ht);
		return NULL;
	}
	return ht;
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

### Set a key/value pair

- We will be using separate chaining to handle collisions
- Runtime: O(1)

---

```c
void set(hash_table *ht, char *key, char *value)
{
	unsigned int index;
	node *curr, *new_node;

	if (!ht || !key || !value)
		exit(1);
	index = generate_key(key, ht->size);
	curr = ht->array[index];
	while (curr)
	{
        // replace an existing key
		if (strcmp(curr->key, key) == 0)
		{
			free(curr->value);
			curr->value = strdup(value);
			return;
		}
		curr = curr->next;
	}
    // add new key/value
	new_node = malloc(sizeof(node));
	new_node->key = strdup(key);
	new_node->value = strdup(value);
	new_node->next = ht->array[index];
	ht->array[index] = new_node;
}

```

---

### Get a value

- Runtime: O(1)

---

```c
char *get(hash_table *ht, char *key)
{
	unsigned int index;
	node *curr;

	if (!ht || !key || !*key)
		return NULL;
	index = generate_key(key, ht->size);
	curr = ht->array[index];
	while (curr)
	{
        // key exists
		if (strcmp(curr->key, key) == 0)
			return (curr->value);
		curr = curr->next;
	}
    // key doesn't exist
	return (NULL);
}
```

---

### Delete a hash table

---

```c
void delete_hash_table(hash_table *ht)
{
	int i;
	node *curr, *tmp;

	if (!ht)
		return;
	for (i = 0; i < ht->size; i++)
		if (ht->array[i])
		{
			curr = ht->array[i];
			while (curr)
			{
				tmp = curr;
				free(curr->key);
				if (curr->value)
					free(curr->value);
				curr = curr->next;
				free(tmp);
			}
		}
	free(ht->array);
	free(ht);
}
```

---

_Author: Tu Vo_
