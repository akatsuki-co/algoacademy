import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Editor from './Editor'
import Preview from './Preview'

const welcomeText = `### Welcome to Algo Academy

---
  
\`\`\`python
print("hello world")
# This is a code snippet
\`\`\`

#### This is a list:
- **bold item**
- _italic_ item
`

const Contribute = () => {
  const [markdown, setMarkdown] = useState(welcomeText)

  return (
    <div className="container py-3">
      <Row>
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
        <Preview markdown={markdown} />
      </Row>
	  <div>Test Maria</div>
    </div>
  )
}

export default Contribute
