import React from "react"
import HighlightedMarkdown from '../../components/HighlightedMarkdown'

const markdown = `\
# Data Types

\`\`\`python
i = 0
print(i)

# 0
\`\`\`
`

const DataTypes = () => {
  return (
  <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
  )
}

export default DataTypes
