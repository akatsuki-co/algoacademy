import React, { useState } from 'react'

import Editor from './Editor'
import Preview from './Preview'

const Contribute = () => {
  const [markdown, setMarkdown] = useState(`
# H1
## H2
### H3
#### H4
##### H5

__bold__
**bold**
_italic_
`)

  return (
    <div>
      <div className="container justify-content">
        <div className="row">
          <Editor markdown={markdown} setMarkdown={setMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  )
}

export default Contribute
