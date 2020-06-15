## Tries

---

A trie is a tree-like data structure used primarily to store alphabetical values.

- Trie comes from the word "re _trie_ val".
- Each node contains letters that reference other nodes, usually stored in an array or a hash-table.
- Each node also has a boolean value that determines if a valid word ends at that node.
- Tries are commonly used in auto-complete functions in search engines.

---

```js
class TrieNode {
  constructor() {
    this.children = {}
    this.is_word = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  /**
   * Inserts a word into the trie.
   * Time complexity: O(n) where n is the length of the word.
   */
  insert(word) {
    let curr = this.root
    for (let c of word) {
      if (!(c in curr.children)) curr.children[c] = new TrieNode()
      curr = curr.children[c]
    }
    curr.is_word = true
  }

  /**
   * Determines if word is in the trie.
   * Time complexity: O(n) where n is the length of the word.
   */
  search(word) {
    let curr = this.root
    for (let c of word) {
      if (!(c in curr.children)) return false
      curr = curr.children[c]
    }
    return curr.is_word
  }

  /**
   * Determines if there is any word in the trie that starts with the
   * given prefix.
   * Time complexity: O(n) where n is the length of the word.
   */
  startsWith(word) {
    let curr = this.root
    for (let c of word) {
      if (!(c in curr.children)) return false
      curr = curr.children[c]
    }
    return true
  }
}
```

---

_Author: Tu Vo_
