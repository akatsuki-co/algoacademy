## Tries

---

A trie is a tree-like data structure used primarily to store alphabetical values.

- Trie comes from the word "re _trie_ val".
- Each node contains letters that reference other nodes, usually stored in an array or a hash-table.
- Each node also has a boolean value that determines if a valid word ends at that node.
- Tries are commonly used in auto-complete functions in search engines.

---

```go
type Trie struct {
	childMap map[byte]*Trie
	ending   bool
}

func Constructor() Trie {
	return Trie{
		childMap: make(map[byte]*Trie),
		ending:   false,
	}
}

/**
 * Inserts a word into the trie.
 * Time complexity: O(n) where n is the length of the word.
 */
func (t *Trie) Insert(word string) {
	if len(word) == 0 {
		return
	}
	currNode := t
	for i := 0; i < len(word); i++ {
		nextNode, ok := currNode.childMap[word[i]]
		if ok {
			currNode = nextNode
		} else {
			newNode := Constructor()
			currNode.childMap[word[i]] = &newNode
			currNode = &newNode
		}
	}
	currNode.ending = true
}

/**
 * Returns if the word is in the trie.
 * Time complexity: O(n) where n is the length of the word.
 */
func (t *Trie) Search(word string) bool {
	if len(word) == 0 {
		return false
	}
	curr := t
	for i := 0; i < len(word); i++ {
		next, ok := curr.childMap[word[i]]
		if !ok {
			return false
		}
		curr = next
	}
	return curr.ending
}

/**
 * Returns if there is any word in the trie that starts with the
 * given prefix.
 * Time complexity: O(n) where n is the length of the word.
 */
func (t *Trie) StartsWith(prefix string) bool {
	if len(prefix) == 0 {
		return true
	}
	curr := t
	for i := 0; i < len(prefix); i++ {
		next, ok := curr.childMap[prefix[i]]
		if !ok {
			return false
		}
		curr = next
	}
	return true
}
```

---

_Author: Tu Vo_
