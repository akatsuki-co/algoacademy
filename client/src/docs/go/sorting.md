## Sorting

---

### Shorthand way to swap values in Go

---

```go
a, b = b, a
```

---

### Bubble Sort

- Time complexity: O(n\*\*2).

---

```go
func bubbleSort(arr []int) {
    size := len(arr)
    if (arr == nil || size < 2) {
        return
    }
    isSorted := true
    for isSorted {
        isSorted = false
        for i := 0; i < size - 1; i++ {
            if arr[i] > arr[i + 1] {
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                isSorted = true;
            }
        }
        size--
    }
}
```

---

### Insertion Sort

- Time complexity: O(n\*\*2).

---

```go
func insertionSort(arr []int) {
    for i := 0; i < len(arr); i++ {
        for j := i; j > 0; j-- {
            if arr[j] < arr[j - 1] {
                arr[j], arr[j - 1] = arr[j - 1], arr[j]
            }
        }
    }
}
```

---

### Selection Sort

- Time complexity: O(n\*\*2).

---

```

---
```
