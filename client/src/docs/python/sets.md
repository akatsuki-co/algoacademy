## Sets

---

A set is a data structure that maps keys to values, similarly to a hash table. The difference is that the values in a set can either be true or false.

In Python, there is a built-in Set class.

---

```python
# Initializing a set
s = set()

# Adding values to a set
# Time complexity: O(1)
s.add(1)
s.add(2)
s.add(3)
print(s) # { 1, 2, 3 }

# Sets can contain mixed data types
s.add("hello")
print(s) # { 1, 2, 3, 'hello' }

# Check if a set has a key
# Time complexity: O(1)
print(1 in s) # True
print(5 in s) # False

# Check size of a set
print(len(s)) # 4

# Remove a value from a set
# Time complexity: O(1)
s.remove(1)
print(s) # { 2, 3, 'hello' }
```

---

### Looping over a set

- Traditional for-of loop works, as well as forEach.

---

```python
s = set([1, 2, 3, 1, 4, 3, 5, 2])
for i in s:
    print(i)

# 1
# 2
# 3
# 4
# 5
```

---

### Determine the intersection, difference and union of two sets

```python
set1 = set([1, 2, 3, 4, 5])
set2 = set([2, 4, 6, 8, 10])

intersection = set1.intersection(set2)
print(intersection) # { 2, 4 }

# alternate syntax
intersection = set1 & set2
print(intersection) # { 2, 4 }

difference = set1.difference(set2)
print(difference) # { 1, 3, 5 }

# alternate syntax
difference = set1 - set2
print(difference) # { 1, 3, 5 }

union = set1.union(set2)
print(union) # {1, 2, 3, 4, 5, 6, 8, 10}

# alternate syntax
union = set1 | set2
print(union) # {1, 2, 3, 4, 5, 6, 8, 10}

```

---

_Author: Tu Vo_
