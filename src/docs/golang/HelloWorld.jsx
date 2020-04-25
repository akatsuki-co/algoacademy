import React from "react"
import HighlightedMarkdown from '../../components/HighlightedMarkdown'

const markdown = `\
# Data Types

\`\`\`golang
package main

import "fmt"

func main() {
  fmt.Println("hello eorld")
}

\\\\ Hello World
\`\`\`
`

const DataTypes = () => {
  return (
  <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
  )
}

export default DataTypes
