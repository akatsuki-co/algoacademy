import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Error from './Error'
import useForm from './../../hooks/useForm'

import './styles.css'

const LogIn = () => {
  const [credentials, handleLogin, handleFieldChange] = useForm('login')
  return (
    <div className="container py-5">
      <Row className="justify-content-md-center py-3">
        <h3>Please sign in.</h3>
      </Row>
      {credentials.error && <Error message={credentials.error} />}
      <Row className="justify-content-md-center">
        <Form
          className="login-form"
          onSubmit={(e) => handleLogin(e, credentials)}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                handleFieldChange('email', e)
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                handleFieldChange('password', e)
              }}
            />
          </Form.Group>
          <Row className="justify-content-md-center py-2">
            <button className="login-btn">Submit</button>
          </Row>
        </Form>
      </Row>
    </div>
  )
}

export default LogIn
