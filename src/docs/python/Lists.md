## Lists

---

A list is an ordered collection that can store zero or more references to Python data objects.

- Written as comma-delimited values enclosed in square brackets.
- Heterogeneous: the data objects do not need to be from the same class.

---

### Initializing a list

Lists can be initialized empty or with values.

```python
list1 = []
list2 = [2, False, 'Python', 3.5]
```

---

### List Operations

```python
my_list = [2, False, 'Python', 3.5]

# Indexing: Access an element
my_list[2]  # 'Python'

# Concatenation: Combine sequences
my_list = [1, 2] + [3, 4]
my_list  # [1, 2, 3, 4]

# Repetition: Concatenate a repeated number of times
my_list = [2, False, 'Python', 3.5] * 2
my_list  # [2, False, 'Python', 3.5, 2, False, 'Python', 3.5]

# Membership: Check if an item is in the list
3.5 in my_list  # True
5 in my_list  # False

# Length: The number of items in the list
len(my_list)  # 8

# Slicing: Extract part of the list
my_list[3, 6]  # [3.5, 2, False]

```

---

### List Methods

```python
my_list = [2, False, 'Python', 3.5]

# Append: Add new item to the end of the list
my_list.append('string')
my_list  # [2, False, 'Python', 3.5, 'string']

# Insert | my_list.insert(i, item) | Insert item at the ith position
my_list.insert(3, 'is cool')
my_list  # [2, False, 'Python', 'is cool', 3.5, 'string']

# Pop: Remove and return the last item
my_list.pop()  # 'string'
my_list  # [2, False, 'Python', 'is cool', 3.5]

# Pop: Remove and return the ith item
my_list.pop(3)  # 'is cool'
my_list  # [2, False, 'Python', 3.5]

# Sort: Modify a list to be sorted
my_list = [5, 2, 8, 0, 4]
my_list.sort()
my_list  # [0, 2, 4, 5, 8]

# Reverse: Modify a list to be reversed
my_list.reverse()
my_list  # [8, 5, 4, 2, 0]

# Del: Delete item in the ith position
del(my_list[2])
my_list  # [8, 5, 2, 0]

# Index: Return the index of the first occurrence of item
my_list.index(5)  # 1

# Count: Return the number of occurrences of item
my_list.count(2)  # 1

# Remove: Remove the first occurrence of item
my_list.remove(2)
my_list  # [8, 5, 0]

```

---

_Author: Brent Muha_
