## Tries

---

A trie is a tree-like data structure used primarily to store alphabetical values.

- Trie comes from the word "re _trie_ val".
- Each node contains letters that reference other nodes, usually stored in an array or a hash-table.
- Each node also has a boolean value that determines if a valid word ends at that node.
- Tries are commonly used in auto-complete functions in search engines.

---

```java
class TrieNode {
    public char val;
    public boolean isWord;
    public TrieNode[] children = new TrieNode[26];

    TrieNode() {
    };
}

class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    /**
     * Inserts a word into the trie. Time complexity: O(n) where n is the length of
     * the word.
     */
    public void insert(String word) {
        TrieNode curr = root;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            if (curr.children[c - 'a'] == null) {
                curr.children[c - 'a'] = new TrieNode();
            }
            curr = curr.children[c - 'a'];
        }
        curr.isWord = true;
    }

    /**
     * Determines if word is in the trie. Time complexity: O(n) where n is the
     * length of the word.
     */
    public boolean search(String word) {
        TrieNode curr = root;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            if (curr.children[c - 'a'] == null)
                return false;
            curr = curr.children[c - 'a'];
        }
        return curr.isWord;
    }

    /**
     * Determines if there is any word in the trie that starts with the given
     * prefix. Time complexity: O(n) where n is the length of the word.
     */
    public boolean startsWith(String prefix) {
        TrieNode curr = root;
        for (int i = 0; i < prefix.length(); i++) {
            char c = prefix.charAt(i);
            if (curr.children[c - 'a'] == null)
                return false;
            curr = curr.children[c - 'a'];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such: Trie obj = new
 * Trie(); obj.insert(word); boolean param_2 = obj.search(word); boolean param_3
 * = obj.startsWith(prefix);
 */
```

---

_Author: Tu Vo_
