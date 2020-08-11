## Streams

---

The Streams API is used to process a collection of objects. Methods can be chained together to produce a final result.

- The original data structure is not modified.

---

```java
import java.lang.StringBuilder;
import java.util.Arrays;
import java.util.List;
import java.util.stream.*;

class StreamsTest {
    public static void main(String[] args) {
        String[] blackpink = { "lisa", "jisoo", "rose", "jennie" };
        // Combine filter, map and sorted
        Arrays.asList(blackpink)
              .stream()
              .filter(s -> s.startsWith("j"))
              .map(String::toUpperCase)
              .sorted()
              .forEach(System.out::println);
        // JENNIE
        // JISOO

        // Stream literal
        Stream.of("lisa", "jisoo", "rose", "jennie")
              .filter(s -> s.startsWith("l"))
              .forEach(System.out::println);
        // lisa

        // Calculate average
        Arrays.stream(new int[] { 10, 25, 55, 85 })
              .average()
              .ifPresent(System.out::println);
        // 43.75

        // Create stream of integers and add up total sum
        int sum = IntStream.range(0, 10)
                           .reduce(0, (a, b) -> a + b);
        System.out.println(sum); // 45

        // Other methods include mapToInt and max
        String[] numbers = { "10", "-2", "373", "65", "99" };
        Arrays.asList(numbers)
              .stream()
              .mapToInt(Integer::parseInt)
              .max()
              .ifPresent(System.out::println);
        // 373

        // get all numbers divisible by 7
        List<Integer> divisibleBySeven = IntStream.range(0, 100)
                                                  .filter(i -> i % 7 == 0)
                                                  .mapToObj(Integer::valueOf)                      
                                                  .collect(Collectors.toList());
        System.out.println(divisibleBySeven);
        // [0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]

        // Ignoring all cases, spaces, and punctuation, determine if string is a
        // palindrome
        String str = "A man, a plan, a canal: Panama";
        StringBuilder builder = new StringBuilder();
        str.chars()
           .filter(c -> Character.isLetterOrDigit(c))
           .mapToObj(c -> Character.toLowerCase((char) c))
           .forEach(builder::append);
        System.out.println(builder.toString().equals(builder.reverse().toString()));
        // true
    }
}
```

---

_Author: Tu Vo_
