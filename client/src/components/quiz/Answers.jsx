import React, { useContext } from 'react'
import Answer from './Answer'
import QuizContext from '../../context/QuizContext'
import shortid from 'shortid'

import './styles.css'

const Answers = () => {
  const { state } = useContext(QuizContext)
  const { questions, currentQuestionIndex } = state
  const letters = Object.keys(questions[currentQuestionIndex].answers)
  return (
    <>
      {letters.map((el) => (
        <Answer key={shortid.generate()} letter={el}></Answer>
      ))}
    </>
  )
}

export default Answers
