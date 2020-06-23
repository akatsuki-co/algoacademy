import React, { useContext } from 'react'
import QuizContext from '../../context/QuizContext'
import { useHistory, useParams } from 'react-router-dom'

import './styles.css'

const Results = () => {
  let { id } = useParams()
  let history = useHistory()
  const { state } = useContext(QuizContext)
  const { answers } = state

  const renderResultsData = () => {
    const correctAnswers = Object.values(answers).reduce((a, b) => {
      b && a++
      return a
    }, 0)
    const questionTotal = Object.keys(answers).length
    window.sessionStorage.setItem(id, `${correctAnswers}/${questionTotal}`)
    return (
      <>
        <h2>Final Score</h2>
        <h3>{`${correctAnswers}/${questionTotal}`}</h3>
      </>
    )
  }

  const restart = () => {
    history.push(`/quiz/${id}`)
  }

  const quizHome = () => {
    history.push('/quiz')
  }
  return (
    <div className='quiz results gradient'>
      {renderResultsData()}
      <button className='quiz-btn btn-primary' onClick={quizHome}>
        Go Back
      </button>
      <button className='quiz-btn btn-primary' onClick={restart}>
        Try Again
      </button>
    </div>
  )
}

export default Results
