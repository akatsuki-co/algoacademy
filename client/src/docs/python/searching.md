## Searching

---

### Linear Search

- Time complexity: O(n)

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

- Time complexity: O(log(n))

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

- Time complexity: O(log(n))

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

_Author: Brent Muha_

---

### Bisect

The `bisect` library has some utility functions that can assist with searching.

`bisect.bisect_left(a, x, lo=0, hi=len(a))`

- returns the left-most insertion point of `x` in a sorted list `a`. The last two parameters are optional, but can represent starting and ending indexes.
- Time complexity: O(log(n))

`bisect.bisect_right(a, x, lo=0, hi=len(a))`

- returns the right-most insertion point of `x` in a sorted list `a`. The last two parameters are optional, but can represent starting and ending indexes.
- Time complexity: O(log(n))

```python
from bisect import bisect_left

arr = [5,10,15,15,20,25]

def binary_search(arr: List[int], item: int) -> int:
    i = bisect_left(arr, item)
    if i != len(arr) and arr[i] == item:
        return i
    return -1

print(binary_search(arr, 10)) # 1
print(binary_search(arr, 15)) # 2
print(binary_search(arr, 30)) # -1
```

---

In addition to searching, `bisect` also has a function called `insort` that can add values into a sorted list while maintaining the list's sorted order.

`bisect.insort(a, x, lo=0, hi=len(a))`

- Time complexity: O(log(n))

```python
import random
from bisect import insort

arr = []
for _ in range(10):
    r = random.randint(1, 100)
    insort(arr, r)
    print(f"inserting {r}\n{arr}")

# inserting 61
# [61]
# inserting 36
# [36, 61]
# inserting 63
# [36, 61, 63]
# inserting 46
# [36, 46, 61, 63]
# inserting 14
# [14, 36, 46, 61, 63]
# inserting 24
# [14, 24, 36, 46, 61, 63]
# inserting 26
# [14, 24, 26, 36, 46, 61, 63]
# inserting 81
# [14, 24, 26, 36, 46, 61, 63, 81]
# inserting 65
# [14, 24, 26, 36, 46, 61, 63, 65, 81]
# inserting 81
# [14, 24, 26, 36, 46, 61, 63, 65, 81, 81]
```

---

_Author: Tu Vo_
