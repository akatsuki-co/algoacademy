import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../context/UserContext'

const useForm = (url) => {
  let history = useHistory()
  const { setActiveUser } = useContext(UserContext)
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    error: '',
  })
  const handleLogin = async (event) => {
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
      body: JSON.stringify(credentials),
    }
    try {
      const response = await fetch(`${host}/api/v1/auth/` + url, settings)
      const responseData = await response.json()
      if (responseData.status === 'success') {
        setActiveUser(responseData.token)
        history.push('/')
      } else {
        setCredentials({ ...credentials, error: responseData.error })
      }
    } catch {
      setCredentials({ ...credentials, error: 'Server Error' })
    }
  }

  const handleFieldChange = (fieldname, event) => {
    setCredentials({ ...credentials, [fieldname]: event.target.value })
  }
  return [credentials, handleLogin, handleFieldChange]
}

export default useForm
