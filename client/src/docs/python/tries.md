## Tries

---

A trie is a tree-like data structure used primarily to store alphabetical values.

- Trie comes from the word "re _trie_ val".
- Each node contains letters that reference other nodes, usually stored in an array or a hash-table.
- Each node also has a boolean value that determines if a valid word ends at that node.
- Tries are commonly used in auto-complete functions in search engines.

---

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.end_of_word = False


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str):
        """
        Inserts a word into the trie.
        Time complexity: O(n) where n is the length of the word.
        """
        curr = self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children.get(char)
        curr.end_of_word = True

    def search(self, word: str) -> bool:
        """
        Determines if word is in the trie.
        Time complexity: O(n) where n is the length of the word.
        """
        curr = self.root
        for char in word:
            if char not in curr.children:
                return False
            curr = curr.children.get(char)
        return curr.end_of_word

    def starts_with(self, prefix: str) -> bool:
        """
        Determines if there is any word in the trie that starts with the
        given prefix.
        Time complexity: O(n) where n is the length of the word.
        """
        curr = self.root
        for char in prefix:
            if char not in curr.children:
                return False
            curr = curr.children.get(char)
        return True
```

---

_Author: Tu Vo_
