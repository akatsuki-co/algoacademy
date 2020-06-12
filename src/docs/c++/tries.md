## Tries

---

A trie is a tree-like data structure used primarily to store alphabetical values.

- Trie comes from the word "re _trie_ val".
- Each node contains letters that reference other nodes, usually stored in an array or a hash-table.
- Each node also has a boolean value that determines if a valid word ends at that node.
- Tries are commonly used in auto-complete functions in search engines.

---

```cpp
#include <iostream>
#include <string>
#include <unordered_map>

using namespace std;

class TrieNode
{
    public:
        unordered_map<char, TrieNode *> children;
        bool is_word = false;
};

class Trie
{
    public:
        void insert(string word);
        bool search(string word);
        bool starts_with(string prefix);

    private:
        TrieNode root;
};

/**
 * Inserts a word into the trie.
 * Time complexity: O(n) where n is the length of the word.
 */
void Trie::insert(string word)
{
    TrieNode *curr = &root;
    for (auto c : word)
    {
        if (!curr->children.count(c))
            curr->children[c] = new TrieNode();
        curr = curr->children[c];
    }
    curr->is_word = true;
}

/**
 * Determines if word is in the trie.
 * Time complexity: O(n) where n is the length of the word.
 */
bool Trie::search(string word)
{
    TrieNode *curr = &root;
    for (auto c : word)
    {
        if (!curr->children.count(c))
            return false;
        curr = curr->children[c];
    }
    return curr->is_word;
}

/**
 * Determines if there is any word in the trie that starts with the
 * given prefix.
 * Time complexity: O(n) where n is the length of the word.
 */
bool Trie::starts_with(string prefix)
{
    TrieNode *curr = &root;
    for (auto c : prefix)
    {
        if (!curr->children.count(c))
            return false;
        curr = curr->children[c];
    }
    return true;
}
```

---

_Author: Tu Vo_
