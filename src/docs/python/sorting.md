## Sorting

---

### Shorthand way to swap values in Python

---

```python
a, b = b, a
```

---

### Bubble Sort

- Time complexity: O(n\*\*2).

---

```python
def bubble_sort(arr: List[int]):
    is_sorted = True
    end = len(arr)
    while is_sorted:
        is_sorted = False
        for i in range(1, end):
            if arr[i] < arr[i-1]:
                arr[i], arr[i-1] = arr[i-1], arr[i]
                is_sorted = True
        end -= 1
```

---

### Insertion Sort

- Time complexity: O(n\*\*2).

---

```python
def insertion_sort(arr: List[int]):
    for i in range(len(arr)):
        for j in range(i, 0, -1):
            if arr[j] < arr[j - 1]:
                arr[j], arr[j - 1] = arr[j - 1], arr[j]
```

---

### Selection Sort

- Time complexity: O(n\*\*2).

---

```python
def selection_sort(arr: List[int]):
    for i in range(len(arr)):
        m = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[m]:
                m = j
        if i != m:
            arr[i], arr[m] = arr[m], arr[i]
```

---

### Quicksort

- Time complexity: O(n \* log(n)).

---

```python
def partition(arr, low, high):
    i = low - 1
    # Using last element as the pivot
    pivot = arr[high]
    for j in range(low, high):
        if arr[j] <= pivot:
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

# In place sort
def quick_sort(arr: List[int], low: int, high: int):
    if low < high:
        p = partition(arr, low, high)
        quick_sort(arr, low, p - 1)
        quick_sort(arr, p + 1, high)
```

---

Alternative way to write quicksort.

- Space complexity: O(n).

---

```python
# Returns a new array
def quick_sort(arr: List[int]) -> List[int]:
    if len(arr) <= 1:
        return arr
    l = [x for x in arr[1:] if x <= arr[0]]
    r = [x for x in arr[1:] if x > arr[0]]
    # Using first element as the pivot
    return quick_sort(l) + arr[0:1] + quick_sort(r)
```

### Shellsort

- Time complexity: O(n \* log(n)).

---

```python
def shell_sort(arr: List[int]):
    n = 0
    while (n < len(arr) // 3):
        n = n * 3 + 1
    while (n > 0):
        for i in range(int(n), len(arr)):
            tmp = arr[i]
            j = i
            while j >= n and arr[j - n] > tmp:
                arr[j] = arr[j-n]
                j -= n
                arr[j] = tmp
        n = (n - 1) // 3
```

---

### Counting Sort

- Time complexity: O(n + k) where n is the number of items and k is the number of possible values.
- Space complexity: O(max(n)).
- This implementation will not work with negative values.

---

```python
def counting_sort(arr: List[int]):
    k = 0
    new_list = (max(arr) + 1) * [0]
    for j in arr:
        new_list[j] += 1
    for i in range(max(arr) + 1):
        if i != 0:
            new_list[i] += new_list[i - 1]
        while new_list[i] != k:
            arr[k] = i;
            k += 1
```

---

### Merge Sort

- Time complexity: O(n \* log(n)).

---

```python
def merge(l: int, r: int):
    arr = []
    i = j = 0
    while i < len(l) and j < len(r):
        if l[i] <= r[j]:
            arr.append(l[i])
            i += 1
        else:
            arr.append(r[j])
            j += 1
    while i < len(l):
        arr.append(l[i])
        i += 1
    while j < len(r):
        arr.append(r[j])
        j += 1
    return arr

# Returns a new array
def merge_sort(arr: List[int]) -> List[int]:
    if len(arr) < 2:
        return arr
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]
    return merge(merge_sort(left), merge_sort(right))
```

---

### Heap Sort

- Time complexity: O(n \* log(n)).

---

```python
def heapify(arr: List[int], n: int, i: int):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2
    if l < n and arr[i] < arr[l]:
        largest = l
    if r < n and arr[largest] < arr[r]:
        largest = r
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr: List[int]):
    n = len(arr)
    for i in range(n, -1, -1):
        heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
```

---

### Radix Sort

- Time complexity: O(k + n) where k is the key length and n is the number of keys.
- This implementation will not work with negative values.

---

```python
def get_digit(num: int, i: int):
    # Return the (i)th index of num
    return (num // 10**i) % 10

def max_digits(arr: List[int]):
    # Return the length of the longest element in array
    return len(str(max(arr)))

def radix_sort(arr: List[int]):
    max_len = max_digits(arr)
    for i in range(max_len):
        res = [[] for x in range(10)]
        for k in arr:
            digit = get_digit(k, i)
            res[digit].append(k)
        res = [y for x in res for y in x]
    arr[:] = res
```

---

_Author: Tu Vo_
