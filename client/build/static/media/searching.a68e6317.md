## Searching

---

### Linear Search

---

```python
def linear_search(my_list, item):
    # Implement sequential search
    for i in range(len(my_list)):
        if my_list[i] == item:
            return True
    return False
```

---

### Binary Search (Iterative)

---

```python
def binary_search(my_list, item):
    # Implement binary search iteratively
    first = 0
    last = len(my_list) - 1
    while first <= last:
        mid = (first + last) // 2
        if my_list[mid] == item:
            return True
        elif my_list[mid] > item:
            last = mid - 1
        else:
            first = mid + 1
    return False
```

---

### Binary Search (Recursive)

---

```python
def binary_search_recursive(my_list, item):
    # Implement binary search recursively
    if len(my_list) == 0:
        return False
    mid = len(my_list) // 2
    if my_list[mid] == item:
        return True
    elif my_list[mid] > item:
        return binary_search_recursive(my_list[:mid], item)
    else:
        return binary_search_recursive(my_list[mid + 1:], item)
```

---

_Author: Brent Muha_
