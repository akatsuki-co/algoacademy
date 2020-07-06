import React, { useContext, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import UserContext from '../../context/UserContext'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import './styles.css'

const LogOut = () => {
  const { setActiveUser } = useContext(UserContext)
  const [, , removeCookie] = useCookies([])
  const history = useHistory()
  useEffect(() => {
    removeCookie('jwt')
    setActiveUser('')
    setTimeout(() => history.push('/'), 3000)
  })
  return (
    <>
      <Row className="justify-content-md-center pt-5">
        <h3>You have successfully logged out.</h3>
      </Row>
      <Row className="justify-content-md-center pt-2 pb-5">
        <h4>You will be redirected shortly.</h4>
      </Row>
    </>
  )
}

export default LogOut
