## Comprehensions

---

List comprehensions are a concise way to write loops in Python. In most situations, they run much faster than manual `for` loops (often twice as fast) because their iterations are performed at C language speed inside the interpreter.

---

```python
# For loop
arr = []
for i in range(5):
    arr.append(i)
print(arr) # [0, 1, 2, 3, 4]

# List comprehension
lc = [i for i in range(5)]
print(lc) # [0, 1, 2, 3, 4]
```

---

### Mapping elements

---

```python
# Regular way
arr = []
for i in range(5):
    arr.append(i * 2)
print(arr) # [0, 2, 4, 6, 8]

# List comprehension
lc = [i * 2 for i in range(5)]
print(lc) # [0, 2, 4, 6, 8]
```

---

### Filtering elements

---

```python
# Regular way
arr = []
for i in range(10):
    if i % 2 == 0:
        arr.append(i)
print(arr) # [0, 2, 4, 6, 8]

# List comprehension
lc = [i for i in range(10) if i % 2 == 0]
print(lc) # [0, 2, 4, 6, 8]
```

---

### Generating matrixes

---

```python
# 5x3 matrix
arr = []
for i in range(3):
    subarr = []
    for j in range(5):
        subarr.append(0)
    arr.append(subarr)
print(arr)
# [[0, 0, 0, 0, 0],
#  [0, 0, 0, 0, 0],
#  [0, 0, 0, 0, 0]]

arr = [[0] * 5 for _ in range(3)]
print(arr)
# [[0, 0, 0, 0, 0],
#  [0, 0, 0, 0, 0],
#  [0, 0, 0, 0, 0]]
```

---

### Dictionary/Set Comprehensions

---

```python
arr = ['a', 'b', 'c']
d = {k:v for k, v in enumerate(arr)}
print(d) # {0: 'a', 1: 'b', 2: 'c'}

d = {k:ord(k) for k in arr}
print(d) # {'a': 97, 'b': 98, 'c': 99}

s = {k for k in arr}
print(s) # {'b', 'c', 'a'}
print(type(s)) # <class 'set'>
```

---

_Author: Tu Vo_
