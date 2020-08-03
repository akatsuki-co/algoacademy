## Strings

---

- Strings are defined as a sequence of Unicode characters.

---

```java
class StringsTest {
  public static void main(String[] args) {
    // declaration
    String word = "pizza";

    // substrings
    String word0 = word.substring(0, 3);
    System.out.println(word0); // piz

    // concatentation
    // strings can be concatenated with the + operator
    String word1 = "Pink ";
    String word2 = "Shorts";
    String word3 = word1 + word2;
    System.out.println(word3); // "Pink Shorts"

    // strings are immutable!
    String word4 = "Sunday";
    // word4[0] = 'F'; this is illegal!
    // instead, create a new string
    String word5 = "F" + word4.substring(1);
    System.out.println(word5); // Funday

    // testing strings for equality
    // do NOT use the "==" operator, this will only test whether or not
    // the strings are stored in the same memory location
    // use .equals instead
    String word6 = "akatsuki";
    String word7 = "akat" + "suki";
    System.out.println(word6.equals(word7)); // true
    // to ignore case, use .equalsIgnoreCase
    String word8 = "Akatsuki";
    System.out.println(word6.equalsIgnoreCase(word8)); // true

    // empty and null strings
    String word9 = "";
    String word10 = null;
    // you can test if a string is empty by using:
    if (word9.length() == 0 || word9.equals("")) {
        // ...
    }
    // a string can also be null, which indicates that no object is currently
    // associated with it
    // you can test if a string is null by using:
    if (word10 == null) {
        // ...
    }

    // Indexing
    // To get a character at a particular index, use .charAt
    String word11 = "akatsuki";
    System.out.println(word11.charAt(3)); // t
  }
}
```

---

### Stringbuilder

---

- If you ever need to combine multiple strings, it is recommended you use the `StringBuilder` class.
- Simply concatenating strings will always create a new string object where the two strings are copied over character by character. On the first iteration, it requires you to copy x characters. The second iteration requires 2x characters and so on. The total time therefore is O(x + 2x + ... nx) => O(xn\*\*2) time.
- StringBuilder will reduce this time to O(n).

```java
import java.lang.StringBuilder;

class Main {
  public static String joinWords(String[] words) {
    StringBuilder sentence = new StringBuilder();
    for (String w: words) {
        sentence.append(w);
    }
    return sentence.toString();
  }
  public static void main(String[] args) {
    String[] words = {"the", " ", "cat", " ", "in", " ", "the", " ", "hat"};
    String combined = joinWords(words);
    System.out.println(combined); // the cat in the hat
  }
}
```

---

_Author: Ryuichi Miyazaki and Tu Vo_
