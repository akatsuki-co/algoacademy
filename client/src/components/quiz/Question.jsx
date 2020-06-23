import React, { useContext } from 'react'
import QuizContext from '../../context/QuizContext'

import './styles.css'

const Question = () => {
  const { state } = useContext(QuizContext)
  const { questions, currentQuestionIndex } = state
  const currentQuestion = questions[currentQuestionIndex]
  return <h1>{currentQuestion.question}</h1>
}

export default Question
