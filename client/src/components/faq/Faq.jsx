import React from 'react'
import Row from 'react-bootstrap/Row'

import './styles.css'

const Faq = () => {
  const questions = [
    [
      'I noticed a bug in the code. How do I submit an error ticket?',
      "Please submit an issue to our github's repository at https://github.com/akatsuki-co/algoacademy.",
    ],
    [
      'How do become a contributor?',
      'You can sign up with your email and use our "Contribute" tab to submit code snippets. If you would like to become a regular contributor, please reach out to us using on Github.',
    ],
    [
      'Are you accepting pull requests?',
      'Yes! We welcome open source contributions from the community. We just ask you to provide a detailed PR commit of the changes you would like to make.',
    ],
    [],
  ]
  return (
    <div className="container py-3">
      <Row className="justify-content-md-center py-3">
        <h3>Frequently Asked Questions</h3>
      </Row>
      {questions.map(([q, a]) => (
        <>
          <Row className="justify-content-md-center py-3">
            <h4>{q}</h4>
          </Row>
          <Row className="justify-content-md-center py-3 faq-answer">
            <h5 className="text-center">{a}</h5>
          </Row>
        </>
      ))}
    </div>
  )
}

export default Faq
