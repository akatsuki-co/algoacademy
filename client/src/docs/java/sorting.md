## Sorting

---

### Bubble Sort

- Time complexity: O(n\*\*2).

---

```java
class SortingAlgos {
  public static void bubbleSort(int[] arr) {
      boolean isNotSorted = true;
      while (isNotSorted) {
          isNotSorted = false;
            for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                isNotSorted = true;
                int tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
          }
      }
  }
}
```

---

### Insertion Sort

- Time complexity: O(n\*\*2).

---

```java
class SortingAlgos {
    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && key < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }
}
```

---

### Quicksort

- Time complexity: O(n \* log(n)).

---

```java
class SortingAlgos {
    public static int partition(int[] arr, int low, int high) {
        // using the last element as the pivot
        int pivot = arr[high], i = low - 1;
        for (int j = low; j < high; j++)
            if (arr[j] <= pivot) {
                i++;
                if (i != j) {
                    int tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        if (i + 1 != high) {
            int tmp = arr[i + 1];
            arr[i + 1] = arr[high];
            arr[high] = tmp;
        }
        return i + 1;
    }

    public static void quickSort(int arr[], int low, int high) {
        if (arr.length < 2)
            return;
        if (low < high) {
            int p = partition(arr, low, high);
            quickSort(arr, low, p - 1);
            quickSort(arr, p + 1, high);
        }
    }
}
```

---

### Shellsort

- Time complexity: O(n \* log(n)).

---

```java
class SortingAlgos {
    public static void shellSort(int[] arr) {
        if (arr.length < 2)
            return;
        int interval = 1;
        // using knuth's sequence
        while (interval <= arr.length / 3)
            interval = interval * 3 + 1;
        while (interval != 0) {
            for (int outer = interval; outer < arr.length; outer++) {
                int val = arr[outer];
                int inner = outer;
                while (inner > interval - 1 && arr[inner - interval] >= val) {
                    arr[inner] = arr[inner - interval];
                    inner -= interval;
                }
                arr[inner] = val;
            }
            interval = (interval - 1) / 3;
        }
    }
}
```

---

### Counting Sort

- Time complexity: O(n + k) where n is the number of items and k is the number of possible values.
- Space complexity: O(max(n)).
- Will not work with negative values.

---

```java
import java.util.Arrays;

class SortingAlgos {
    public static void countingSort(int[] arr) {
        if (arr.length < 2)
            return;
        int counter = 0;
        int storageSize = Arrays.stream(arr).max().getAsInt() + 1;
        int[] storage = new int[storageSize];
        for (int i = 0; i < arr.length; i++) {
            int num = arr[i];
            storage[num] += 1;
        }
        for (int i = 0; i < storageSize; i++) {
            int last = (i == 0) ? 0 : storage[i - 1];
            storage[i] += last;
            while (storage[i] != counter)
                arr[counter++] = i;
        }
    }
}
```

---

### Merge Sort

- Time complexity: O(n \* log(n)).

---

```java
class SortingAlgos {
    public static void merge(int arr[], int l, int m, int r) {
        int n1 = m - l + 1, n2 = r - m;
        int left[] = new int[n1], right[] = new int[n2];
        for (int i = 0; i < n1; i++)
            left[i] = arr[l + i];
        for (int i = 0; i < n2; i++)
            right[i] = arr[m + 1 + i];
        int i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (left[i] <= right[j]) {
                arr[k] = left[i++];
            } else {
                arr[k] = right[j++];
            }
            k++;
        }
        while (i < n1)
            arr[k++] = left[i++];
        while (j < n2)
            arr[k++] = right[j++];
    }

    public static void mergeSort(int arr[], int l, int r) {
        if (l < r) {
            int m = (l + r) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }
}
```

---

### Heap Sort

- Time complexity: O(n \* log(n)).

---

```java
class SortingAlgos {
    public static void heapify(int[] arr, int n, int i) {
        int max = i, left = 2 * i, right = 2 * i + 1;
        if (left < n && arr[left] > arr[max])
            max = left;
        if (right < n && arr[right] > arr[max])
            max = right;
        if (max != i) {
            int tmp = arr[i];
            arr[i] = arr[max];
            arr[max] = tmp;
            heapify(arr, n, max);
        }
    }

    public static void heapSort(int[] arr) {
        for (int i = arr.length / 2 - 1; i >= 0; i--)
            heapify(arr, arr.length, i);
        for (int i = arr.length - 1; i >= 0; i--) {
            int tmp = arr[0];
            arr[0] = arr[i];
            arr[i] = tmp;
            heapify(arr, i, 0);
        }
    }
}
```

---

### Radix Sort

- Time complexity: O(k + n) where k is the key length and n is the number of keys.

---

```java
import java.util.Arrays;

class SortingAlgos {
    public static void helper(int[] arr, int divisor) {
        int[] output = new int[arr.length];
        int[] count = new int[10];
        for (int i = 0; i < arr.length; i++)
            count[(arr[i] / divisor) % 10]++;
        for (int i = 1; i < 10; i++)
            count[i] += count[i - 1];
        for (int i = arr.length - 1; i >= 0; i--) {
            output[count[(arr[i] / divisor) % 10] - 1] = arr[i];
            count[(arr[i] / divisor) % 10]--;
        }
        for (int i = 0; i < arr.length; i++)
            arr[i] = output[i];
    }

    public static void radixSort(int[] arr) {
        if (arr.length < 2)
            return;
        int maxNum = Arrays.stream(arr).max().getAsInt();
        for (int i = 1; maxNum / i > 0; i *= 10)
            helper(arr, i);
    }
}
```

---

_Author: Tu Vo_
