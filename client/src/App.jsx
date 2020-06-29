import React, { useState, useEffect } from 'react'
import AppRouter from './components'
import UserContext from './context/UserContext'
import { useCookies } from 'react-cookie'

import './App.css'

const App = () => {
  const [cookies] = useCookies(['jwt'])
  const [activeUser, setActiveUser] = useState('')
  useEffect(() => {
    if (cookies && cookies.jwt) {
      setActiveUser(cookies.jwt)
    }
  }, [cookies])
  return (
    <div className='App'>
      <UserContext.Provider value={{ activeUser, setActiveUser }}>
        <AppRouter />
      </UserContext.Provider>
    </div>
  )
}

export default App
