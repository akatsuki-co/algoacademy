## Hash Tables

---

A hash table is a data structure that maps keys to values.

In Java, Maps are used to represent hash tables. There are various types of Maps such as WeakHashMap, LinkedHashMap, EnumMap, and IdentityHashMap.

---

```java
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

class MapTest {

    public static void main(String[] args) {
        String str = "algoacademy is awesome";

        // initialize new HashMap
        HashMap<Character, Integer> counter = new HashMap<Character, Integer>();

        // Put keys in Map
        // O(1) runtime
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            counter.put(c, counter.containsKey(c) ? counter.get(c) + 1 : 1);
        }

        // Check if Map contains key
        // O(1) runtime
        System.out.println(counter.containsKey('y')); // true
        System.out.println(counter.containsKey('x')); // false

        // Get a key's value
        // O(1) runtime
        System.out.println("There are " + counter.get('a') + " a's in this sentence.");
        // There are 4 a's in this sentence.

        // loop through Map using Java 8+
        counter.forEach((k, v) -> {
            System.out.println(k + ": " + v);
        });
        //  : 2
        // a: 4
        // c: 1
        // d: 1
        // e: 3
        // g: 1
        // i: 1
        // l: 1
        // m: 2
        // o: 2
        // s: 2
        // w: 1
        // y: 1

        // LinkedHashMap preserves insertion order
        LinkedHashMap<Character, Integer> counter2 = new LinkedHashMap<Character, Integer>();

        // convert string to char array
        char[] charArr = str.toCharArray();
        for (char c : charArr) {
            counter2.put(c, counter2.containsKey(c) ? counter2.get(c) + 1 : 1);
        }

        // loop through Map with entrySet()
        for (Map.Entry<Character, Integer> entry : counter2.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        // a: 4
        // l: 1
        // g: 1
        // o: 2
        // c: 1
        // d: 1
        // e: 3
        // m: 2
        // y: 1
        //  : 2
        // i: 1
        // s: 2
        // w: 1
    }
}
```

---

_Author: Tu Vo_
