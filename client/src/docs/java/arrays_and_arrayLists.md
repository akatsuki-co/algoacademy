## Arrays and ArrayLists

---

Arrays hold sequences of values of the same data type.

- You access each individual value through an integer index.
- Once you create a new array, you cannot change it's length.

---

```java
import java.util.Arrays;

class ArraysTest {
  public static void main(String[] args) {
    // array literals
    // array of strings
    String[] cars = {"Honda", "Toyota",  "Nissan", "Mazda", "Subaru"};
    // array of integers
    int[] nums = {7, 25, 19, 88};
    // two-dimensional array
    int[][] matrix = new int[10][10];

    // declare a new array of 10 elements
    int[] a = new int[10];
    for (int i = 0; i < 10; i++) {
        a[i] = i; // fills array with values from 0 to 9
    }

    // for each loop
    for (int i : a) {
        System.out.println(i);
    } // 0 1 2 3 4 5 6 7 8 9

    // copying arrays
    int[] b = a; // b and a point to same object
    b[0] = 100;
    System.out.println(Arrays.toString(b)); // [100, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    System.out.println(Arrays.toString(a)); // [100, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // to create different objects, use Arrays.copyOf
    int[] c = Arrays.copyOf(a, a.length);
    c[1] = 101;
    System.out.println(Arrays.toString(c)); // [100, 101, 3, 4, 5, 6, 7, 8, 9]
    System.out.println(Arrays.toString(a)); // [100, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    // sorting
    int[] d = {22, 10, 6, 42, -3, 8};
    Arrays.sort(d);
    System.out.println(Arrays.toString(d)); // [-3, 6, 8, 10, 22, 42]
  }
}
```

---

### ArrayLists

---

ArrayList is a generic class with a type parameter. Unlike arrays, it is dynamic in size.

---

```java
import java.util.ArrayList;

class ArrayListTest {
  public static void main(String[] args) {
      // ArrayList declaration
      ArrayList<Integer> nums = new ArrayList<Integer>();
      // adding elements into ArrayList
      for (int i = 0; i < 5; i++) {
          nums.add(i);
      }
      System.out.println(nums); // println pretty prints ArrayLists
      // [0, 1, 2, 3, 4]

      // you can also declare ArrayList with var
      var odds = new ArrayList<Integer>();
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 1) {
                odds.add(i);
            }
      }
      System.out.println(odds); // [1, 3, 5, 7, 9]

      // accessing elements, use get()
      System.out.println(odds.get(1)); // 3

      // removing elements, use remove(<index>)
      // not terribly efficient if used on middle elements as all elements after have to re-shifted
      odds.remove(2);
      System.out.println(odds); // [1, 3, 7, 9]
  }
}
```

_Author: Ryuichi Miyazaki and Tu Vo_
