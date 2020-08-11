## Streams

---

The Streams API is used to process a collection of objects. Methods can be chained together to produce a final result.

- The original data structure is not modified.

---

```java
import java.util.Arrays;
import java.util.stream.*;

class Main {
  public static void main(String[] args) {
      String[] blackpink = {"lisa", "jisoo", "rose", "jennie"};
      Arrays.asList(blackpink).stream().filter(s -> s.startsWith("j")).map(String::toUpperCase).sorted().forEach(System.out::println);
      // JENNIE
      // JISOO

      Stream.of("lisa", "jisoo", "rose", "jennie").filter(s -> s.startsWith("l")).forEach(System.out::println); // lisa

      Arrays.stream(new int[] {10, 25, 55, 85}).average().ifPresent(System.out::println); // 43.75

      int sum = IntStream.range(0, 10).reduce(0, (a, b) -> a + b);
      System.out.println(sum); // 45

      String[] numbers = {"101", "-2", "37", "65", "99"};
      Arrays.asList(numbers).stream().mapToInt(Integer::parseInt).max().ifPresent(System.out::println); // 101
  }
}
```

---

_Author: Tu Vo_
