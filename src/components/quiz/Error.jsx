import React, { useContext } from 'react'
import QuizContext from '../../context/QuizContext'

import './styles.css'

function Error() {
  const { state } = useContext(QuizContext)
  const { error } = state
  if (!error) {
    return null
  }

  return <div className="error">{error}</div>
}

export default Error
