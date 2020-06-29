import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import './styles.css'

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const handleLogin = async (event, data) => {
        event.preventDefault()
        const host = 'http://localhost:5000'
        const settings = {
            method: 'POST',
            crossDomain: true,
            withCredentials: true,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        try {
            const response = await fetch(`${host}/api/v1/auth/login`, settings)
            const responseData = await response.json()
            return responseData
        } catch (err) {
            console.log(err)
        }
    }

    const handleFieldChange = (fieldname, event) => {
        setCredentials({...credentials, [fieldname]: event.target.value})
    }

  return (
    <div className='container py-5'>
      <Row className='justify-content-md-center'>
          <Form className='login-form' onSubmit={e => handleLogin(e, credentials)}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' onChange={e => {
                  handleFieldChange('email', e)
              }}/>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' onChange={e => {
                  handleFieldChange('password', e)
              }}/>
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
