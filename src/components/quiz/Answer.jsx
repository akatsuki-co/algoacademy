import React, { useContext } from 'react'
import { SET_CURRENT_ANSWER, SET_ERROR } from '../../reducers/types.jsx'
import QuizContext from '../../context/QuizContext'

import './styles.css'

const Answer = ({ letter }) => {
  const { state, dispatch } = useContext(QuizContext)
  const { currentAnswer, currentQuestion } = state
  let classes = ['answer']

  const handleClick = (e) => {
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: e.target.value })
    dispatch({ type: SET_ERROR, error: '' })
  }

  if (currentAnswer === letter) classes.push('selected')

  return (
    <button value={letter} className={classes.join(' ')} onClick={handleClick}>
      <span className='letter'>{letter}.</span>
      {currentQuestion.answers[letter]}
    </button>
  )
}

export default Answer
