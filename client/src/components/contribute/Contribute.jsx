import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
      <Form className="py-3">
        <Form.Row className="align-items-center justify-content-center">
          <Col xs="auto">
            <Form.Control placeholder="Username" />
          </Col>
          <Col xs="auto">
            <Form.Control placeholder="e.g. Python, C++" />
          </Col>
          <Col xs="auto">
            <button className="contribute-btn">Submit</button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  )
}

export default Contribute
