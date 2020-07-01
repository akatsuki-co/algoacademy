import React from 'react'
import Row from 'react-bootstrap/Row'

import './styles.css'

const Error = ({message}) => {
  return (
    <Row className="justify-content-md-center pb-3">
      <h4 className="error">{message}</h4>
    </Row>
  )
}

export default Error
