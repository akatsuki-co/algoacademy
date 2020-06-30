import React from 'react'
import Row from 'react-bootstrap/Row'

import './styles.css'

const Error = () => {
  return (
    <Row className="justify-content-md-center pb-3">
      <h4 className="error">There was an error! Please try again.</h4>
    </Row>
  )
}

export default Error
