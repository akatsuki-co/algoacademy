import React, { useContext } from 'react'
import QuizContext from '../../context/QuizContext'
import { useHistory } from 'react-router-dom'
import { RESET_QUIZ } from '../../reducers/types.jsx'

import './styles.css'

const Results = () => {
  let history = useHistory()
  const { state, dispatch } = useContext(QuizContext)
  const { answers, questions } = state

  const renderResultMark = (question, answer) => {
    if (question.correct_answer.includes(answer.answer)) {
      return <span className='correct'>Correct</span>
    }
    return <span className='failed'>Failed</span>
  }

  const renderResultsData = () => {
    return answers.map((answer) => {
      const question = questions.find(
        (question) => question.id === answer.questionId
      )
      return (
        <div key={question.id}>
          {question.question} - {renderResultMark(question, answer)}
        </div>
      )
    })
  }

  const restart = () => {
    dispatch({ type: RESET_QUIZ })
    history.push('/quiz')
  }
  return (
    <div className='quiz results gradient'>
      <h2>Results</h2>
      <ul>{renderResultsData()}</ul>
      <button className='quiz-btn btn-primary' onClick={restart}>
        Go Back
      </button>
    </div>
  )
}

export default Results
