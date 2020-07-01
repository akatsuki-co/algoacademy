import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Error from './Error'
import { useHistory } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import './styles.css'

const LogIn = () => {
  let history = useHistory()
  const { setActiveUser } = useContext(UserContext)
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    error: false,
  })
  const handleLogin = async (event, data) => {
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
      const response = await fetch(`${host}/api/v1/auth/login`, settings)
      const responseData = await response.json()
      if (responseData.status === 'success') {
        setActiveUser(responseData.token)
        history.push('/')
      } else {
        setCredentials({ ...credentials, error: true })
      }
      return responseData
    } catch {
      setCredentials({ ...credentials, error: true })
    }
  }

  const handleFieldChange = (fieldname, event) => {
    setCredentials({ ...credentials, [fieldname]: event.target.value })
  }

  return (
    <div className="container py-5">
      <Row className="justify-content-md-center py-3">
        <h3>Please sign in.</h3>
      </Row>
      {credentials.error ? <Error /> : null}
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
