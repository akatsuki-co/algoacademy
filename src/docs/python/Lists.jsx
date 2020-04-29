import React from "react"
import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `
## Lists

---

An list is an ordered collection that can store zero or more references to Python data objects.\n
- Written as comma-delimited values enclosed in square brackets.
- Heterogeneous: the data objects do not need to be from the same class.

---

### Initializing a list

Lists can be initalized empty or with values.

\`\`\`python
list1 = []
list2 = [2, False, 'Python', 3.5]
\`\`\`

---

### List Operations

| Name | Operator | Explanation |
| :-: | :-: | :-: |
| indexing | [] | Access an element |
| concatenation | + | Combine sequences |
| repetition | * | Concatenate a repeated number of times
| membership | in | Check if an item is in the list
| length | len | The number of items in the list
| slicing | [:] | Extract part of the list

---

_Author: Brent Muha_

`

const Arrays = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default Arrays
