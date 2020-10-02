## Sets

---

A set is a data structure that maps keys to values, similarly to a hash table. The difference is that the values in a set can either be true or false.

In Java, there are several Set classes, including HashSets, TreeSets, and LinkedHashSets.

---

### HashSets

- Uses an internal `hashCode` function to map keys to indexes.
- Dynamic in size.
- Users can specify initial bucket count in constructor.

---

```java
import java.util.Arrays;
import java.util.HashSet;

class HashSetTest {
    public static void main(String[] args) {
        // initialize new set
        HashSet<Integer> set = new HashSet<Integer>();
        int[] arr = {1, 2, 2, 2, 3, 4, 4, 5};

        // add elements
        // O(1) runtime
        for (int i : arr) {
            set.add(i);
        }
        System.out.println(set); // [1, 2, 3, 4, 5]

        // check if set contains elements
        // O(1) runtime
        System.out.println(set.contains(2)); // true
        System.out.println(set.contains(7)); // false

        // remove element
        // O(1) runtime
        set.remove(4);
        System.out.println(set); // [1, 2, 3, 5]
    }
}
```

---

### TreeSets

- Similar to HashSets, except keeps elements sorted.
- Uses red-black trees under the hood.
- Slightly slower runtime than HashSets.

---

```java
import java.util.Arrays;
import java.util.HashSet;
import java.util.TreeSet;

class TreeSetTest {
    public static void main(String[] args) {
        String[] cities = {"oakland",
                           "berkeley",
                           "san francisco",
                           "oakland",
                           "san jose",
                           "los angeles",
                           "san francisco"};
        HashSet<String> set1 = new HashSet<String>(Arrays.asList(cities));
        System.out.println(set1);
        // [berkeley, oakland, san jose, los angeles, san francisco]
        // notice items are not in alphabetical order

        // for sorted sets, use TreeSets
        var set2 = new TreeSet<String>(Arrays.asList(cities));
        System.out.println(set2);
        // [berkeley, los angeles, oakland, san francisco, san jose]
    }
}
```

---

### LinkedHashSet

- Similar to HashSets, excepts it preserves insertion order.
- Slightly slower runtime than HashSets.

```java
import java.util.Arrays;
import java.util.LinkedHashSet;

class LinkedHashSetTest {
    public static void main(String[] args) {
        String[] cities = {"oakland",
                           "berkeley",
                           "san francisco",
                           "oakland",
                           "san jose",
                           "los angeles",
                           "san francisco"};
        var set3 = new LinkedHashSet<String>(Arrays.asList(cities));
        System.out.println(set3);
        // [oakland, berkeley, san francisco, san jose, los angeles]
    }
}
```

---

_Author: Tu Vo_
