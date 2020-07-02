import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Error from './Error'
import useForm from './../../hooks/useForm'

import './styles.css'

const SignUp = () => {
  const [credentials, handleLogin, handleFieldChange] = useForm('signup')
  return (
    <div className="container py-5">
      <Row className="justify-content-md-center py-3">
        <h3>Don't have an account? Register below.</h3>
      </Row>
      {credentials.error && <Error message={credentials.error} />}
      <Row className="justify-content-md-center">
        <Form
          className="login-form "
          onSubmit={(e) => handleLogin(e, credentials)}
        >
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={(e) => {
                handleFieldChange('name', e)
              }}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                handleFieldChange('email', e)
              }}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                handleFieldChange('password', e)
              }}
              minlength="8"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              onChange={(e) => {
                handleFieldChange('passwordConfirm', e)
              }}
              minlength="8"
              required
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

export default SignUp
