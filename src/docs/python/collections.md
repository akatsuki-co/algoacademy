## Collections

### Counter

The `Counter` object is used as a subclass of `dict` to count hashable objects. It is an unordered collection where elements are stored as dictionary keys and their counts are stored as dictionary values.

---

```python
from collections import Counter

string = "alphabet"
c = Counter(string)
print(c) # Counter({'a': 2, 'l': 1, 'p': 1, 'h': 1, 'b': 1, 'e': 1, 't': 1})
```

---

#### Most Common

The `Counter` object has a method called `most_common(n)` that takes an optional integer argument. It returns a list of the `n` most common elements and their counts from the most common to the least. If `n` is omitted or `None`, `most_common()` returns all elements in the counter. Elements with equal counts are ordered arbitrarily.

---

```python
c = Counter([3, 7, 5, 2, 3, 5, 1, 3, 4, 5, 6, 7, 3, 4, 2, 1])
print(c) # Counter({3: 4, 5: 3, 7: 2, 2: 2, 1: 2, 4: 2, 6: 1})
print(c.most_common()) # [(3, 4), (5, 3), (7, 2), (2, 2), (1, 2), (4, 2), (6, 1)]
print(c.most_common(3)) # [(3, 4), (5, 3), (7, 2)]
```

---

**Interview Question**

#### Determine if two strings are anagrams of each other

- The `Counter` object can be compared with another `Counter` object for equality.

---

```python
def is_anagram(s: str, t: str) -> bool:
    return Counter(s) == Counter(t)

print(is_anagram("ate", "tea")) # True
print(is_anagram("ate", "tee")) # False
```

---

**Interview Question**

#### Given a string, sort it in decreasing order based on the frequency of characters.

---

```python
def frequency_sort(s: str) -> str:
    return ("".join(char * times for char, times in Counter(s).most_common()))

print(frequency_sort("tree")) # eetr
print(frequency_sort("abracadabra")) # aaaaabbrrcd
```

**Interview Question**

#### Given an array of integers, return the largest integer that only occurs once. If no integer occurs once, return -1.

- Use `.items()` to loop through a `Counter`, just like a regular `dict`.

---

```python
def largest_unique_number(arr: List[int]) -> int:
    return max([k for k, v in Counter(arr).items()
                if v == 1], default=-1)

print(largest_unique_number([5, 7, 3, 9, 4, 9, 8, 3, 1])) # 8
print(largest_unique_number([9, 9, 8, 8])) # -1
```

---

_Author: Tu Vo_
