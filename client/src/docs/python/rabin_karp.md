## Rabin-Karp Fingerprint Substring Algorithm

---

- Compute a hash function for the pattern
- Look for a match by using same hash function for each possible m-character substring of the text
- If text substring has same hash value as pattern, check for match
- Time complexity: O(n + m) average, O(n \* m) worst case
- Space complexity: O(n + m)

---

```py
from functools import reduce

MAX_CHARS = 256
BIG_PRIME = 997

class Rabin_Karp:
    def __init__(self, text: str, pattern: str):
        self.text = text
        self.pattern = pattern
        self.t_size = len(text)
        self.p_size = len(pattern)
        self._hash = pow(MAX_CHARS, self.p_size - 1) % BIG_PRIME
        self.res = []

    def hash_string(self, string: str):
        """
        Hashes a string with Horner's method.
        """
        return reduce(lambda x, y: (MAX_CHARS * x + ord(y))
                      % BIG_PRIME, string, 0)

    def search(self):
        """
        Searches for substring indexes.
        """
        p_hash = self.hash_string(self.pattern)
        t_hash = self.hash_string(self.text[:self.p_size])
        for i in range(self.t_size - self.p_size + 1):
            if p_hash == t_hash and self.check(i):
                self.res.append(start)
            if i < self.t_size - self.p_size:
                # remove head
                t_hash = (t_hash - self._hash *
                          ord(self.text[i])) % BIG_PRIME
                # add tail
                t_hash = (t_hash * MAX_CHARS +
                          ord(self.text[i + self.p_size])) % BIG_PRIME
                if t_hash < 0:
                    t_hash = t_hash + BIG_PRIME
        return self.res

    def check(self, start: str) -> bool:
        """
        Verifies strings are equal in case there is a hash collision.
        """
        for i in range(self.p_size):
            if self.pattern[i] != self.text[start + i]:
                return False
        return True


rb = Rabin_Karp("31265441592653589793", "2653")
print(rb.search())
# [0]


rb1 = Rabin_Karp("xxxxx", "xx")
print(rb1.search())
# [0, 1, 2, 3]
```

---

_Author: Tu Vo_
