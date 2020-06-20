import React, { useContext } from 'react'
import {
  SET_CURRENT_ANSWER,
  REMOVE_CURRENT_ANSWER,
  SET_ERROR,
} from '../../reducers/types.jsx'
import QuizContext from '../../context/QuizContext'

import './styles.css'

const Answer = ({ letter }) => {
  const { state, dispatch } = useContext(QuizContext)
  const { currentAnswer, questions, currentQuestionIndex } = state
  const currentQuestion = questions[currentQuestionIndex]

  const handleClick = (e) => {
    if (!currentAnswer.includes(letter)) {
      dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: e.target.value })
      dispatch({ type: SET_ERROR, error: '' })
    } else {
      dispatch({ type: REMOVE_CURRENT_ANSWER, currentAnswer: e.target.value })
    }
  }

  return (
    <button
      value={letter}
      className={currentAnswer.includes(letter) ? 'selected answer' : 'answer'}
      onClick={handleClick}>
      <span className='letter'>{letter}.</span>
      {currentQuestion.answers[letter]}
    </button>
  )
}

export default Answer
