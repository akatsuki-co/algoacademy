import React from "react"
import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `
## Dictionaries

---

A dictionary is a collection of associated pairs of items.\n
- Each pair consists of a key and value.
- Written as comma-delimited key:value pairs enclosed in curly braces.
- Dictionaries are unordered.

---

### Initializing a dictionary

Dictionaries can be initialized empty or with values.

\`\`\`python
dict1 = {}
dict2 = {'California': 'Sacramento', 'Maryland': 'Annapolis'}
\`\`\`

---

### Dictionary Operations

\`\`\`python
gary = {'Age': 9, 'Breed': 'American Shorthair'}

# Indexing: Return value associated with key, otherwise error
gary['Age']  # 9
gary['Size']  # KeyError: 'Size'

# Membership: Check if an key is in the dictionary
'Breed' in gary  # True
'Size' in gary  # False

# Del: Remove the entry from the dictionary
del gary['Age']
gary  # {'Breed': 'American Shorthair'}
\`\`\`

---

### Dictionary Methods

\`\`\`python
gary = {'Age': 9, 'Breed': 'American Shorthair'}

# Keys: Return the keys of the dictionary in a dict_keys object
gary.keys()  # dict_keys(['Age', 'Breed'])

# Values: Return the values of the dictionary in a dict_values object
gary.values()  # dict_values([9, 'American Shorthair'])

# Items: Return the key-value pairs in a dict_items object
gary.items()  # dict_items([('Age', 9), ('Breed', 'American Shorthair')])

# Get: Return the value associated with key, None otherwise
gary.get('Age')  # 9
gary.get('Size')  # None

# Get: Return the value associated with key, alt otherwise
gary.get('Size', 'large')  # 'large'

\`\`\`

---

_Author: Brent Muha_

`

const Arrays = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default Arrays
