import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import './styles.css'

const Login = () => {
  return (
    <div className='container py-5'>
      <Row className='justify-content-md-center'>
        <Form className='login-form '>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Row className='justify-content-md-center py-2'>
            <button className='login-btn'>Submit</button>
          </Row>
        </Form>
      </Row>
    </div>
  )
}

export default Login
