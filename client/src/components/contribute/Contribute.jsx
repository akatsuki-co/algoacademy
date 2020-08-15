import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Editor from './Editor'
import Preview from './Preview'
import Error from '../auth/Error'
import { useHistory  } from 'react-router-dom'

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
  let history = useHistory()
  const [markdown, setMarkdown] = useState(welcomeText)
  const [contribution, setContribution] = useState({
    username: '',
    topic: '',
    markdown: markdown,
    error: ''
  })
  const handleContribute = async (event, data) => {
    event.preventDefault()
    const host = process.env.REACT_APP_HOST 
    const settings = {
      method: 'POST',
      crossDomain: true,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    try {
      const response = await fetch(`${host}/api/v1/contribute`, settings)
      const responseData = await response.json()
      if (responseData.status === 'success') {
        const username = contribution.username.replace(/\s+/g, '_').toLowerCase()
        const topic = contribution.topic.replace(/\s+/g, '_').toLowerCase()
        const today = new Date()
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        await fetch("https://api.github.com/repos/akatsuki-co/algoacademy/issues",
        {
          headers: {"Authorization": "token " + process.env.REACT_APP_GITHUB_TOKEN},
          method: "POST",
          body: JSON.stringify({
            "title": `${date} ${username} - ${topic}`,
            "body": markdown,
            "labels": ["enhancement"]
          })
        })
        await githubResponse.json()
        await history.push('/')
      } else {
        setContribution({ ...contribution, error: responseData.error })
        console.log(error)
      }
      return responseData
    } catch(err) {
      setContribution({ ...contribution, error: err })
        console.log(error)
    }
  }

  const handleFieldChange = (fieldname, event) => {
    setContribution({ ...contribution, [fieldname]: event.target.value })
  }

  return (
    <div className="container py-3">
      <Row>
        <Editor
            markdown={markdown}
            setMarkdown={setMarkdown}
            contribution={contribution}
            setContribution={setContribution}
        />
        <Preview markdown={markdown} />
      </Row>
        {contribution.error ? <Error message={contribution.error} /> : null}
      <Form
          className="py-3"
          onSubmit={(e) => handleContribute(e, contribution)}
      >
        <Form.Row className="align-items-center justify-content-center">
          <Col xs="auto">
            <Form.Control
                placeholder="Username"
                onChange={(e) => {
                    handleFieldChange('username', e)
                }}
                required
            />
          </Col>
          <Col xs="auto">
            <Form.Control
                placeholder="e.g. Python, C++" 
                onChange={(e) => {
                    handleFieldChange('topic', e)
                }}
                required
            />
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
