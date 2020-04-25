import React from "react"
import HighlightedMarkdown from '../../components/HighlightedMarkdown'

const markdown = `

## Hello World!

---

Quick facts about Python:\n
- Dynamically typed
- Interpreted
- Automatic garbage collection
- Supports object-oriented programming

---

\`\`\`python
print('Hello World!')

# Hello World!

\`\`\`

---

`

const HelloWorld = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default HelloWorld
