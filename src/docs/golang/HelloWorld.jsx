import React from "react"
import HighlightedMarkdown from '../../components/HighlightedMarkdown'

const markdown = `\

## Hello World!

---

Quick facts about Golang:\n
- Statically typed
- Compiled
- Automatic garbage collection

---

\`\`\`golang
package main

import "fmt"

func main() {
  fmt.Println("Hello World!")
}

\/\/ Hello World!
\`\`\`

---

`

const DataTypes = () => {
  return (
  <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
  )
}

export default DataTypes
