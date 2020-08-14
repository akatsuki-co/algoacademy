## Searching

---

### Linear Search

- Time complexity: O(n)

---

```java
class Main {
    public static int linearSearch(int[] arr, int val) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = new int[] { 1, 4, 8, 12, 23, 39, 44, 64, 99 };
        System.out.println(linearSearch(arr, 4)); // 1
        System.out.println(linearSearch(arr, 64)); // 7
        System.out.println(linearSearch(arr, 9)); // -1
    }
}

```

---

### Binary Search

- Time complexity: O(log(n))

---

```java
class BinarySearchTest {
    public static int binarySearch(int[] arr, int val) {
        int lo = 0, hi = arr.length - 1;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (arr[mid] == val) {
                return mid;
            }
            if (arr[mid] > val) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = new int[] { 1, 4, 8, 12, 23, 39, 44, 64, 99 };
        System.out.println(binarySearch(arr, 4)); // 1
        System.out.println(binarySearch(arr, 64)); // 7
        System.out.println(binarySearch(arr, 9)); // -1, not found
    }
}

```

---

_Author: Tu Vo_
