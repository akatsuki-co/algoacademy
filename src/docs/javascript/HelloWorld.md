import React from "react"
import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `

## Hello World!

---

Quick facts about Javascript:\n
- Dynamically typed
- Interpreted
- Automatic garbage collection
- Supports object-oriented programming

---

\`\`\`js
console.log("Hello World!")

\\\\ Hello World!
\`\`\`

---

`

const HelloWorld = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default HelloWorld
