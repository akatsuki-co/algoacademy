import React, { useReducer } from 'react'
import Progress from './Progress'
import Question from './Question'
import Answers from './Answers'
import Results from './Results'
import QuizContext from '../../context/QuizContext'
import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION,
  SET_NEXT_QUESTION,
  SET_CURRENT_ANSWER,
  SET_ERROR,
  SET_SHOW_RESULTS,
} from '../../reducers/types.jsx'
import quizReducer from '../../reducers/QuizReducer'
import shuffle from '../../utils/shuffle'

import data from '../../data/quiz.json'
import './styles.css'

function Quiz() {
  const initialState = {
    questions: data,
    currentQuestionIndex: 0,
    currentQuestion: null,
    currentAnswer: '',
    answers: [],
    showResults: false,
    error: '',
  }
  const [state, dispatch] = useReducer(quizReducer, initialState)
  const {
    questions,
    currentQuestionIndex,
    currentQuestion,
    currentAnswer,
    answers,
    showResults,
    error,
  } = state

  const renderError = () => {
    if (!error) return
    return <div className='error'>{error}</div>
  }

  const shuffleQuiz = () => {
    shuffle(questions)
    dispatch({
      type: SET_CURRENT_QUESTION,
      currentQuestion: questions[0],
    })
  }

  const next = () => {
    const answer = { questionId: currentQuestion.id, answer: currentAnswer }
    if (!currentAnswer)
      return dispatch({ type: SET_ERROR, error: 'Please select an option' })
    answers.push(answer)
    dispatch({ type: SET_ANSWERS, answers })
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: '' })
    if (currentQuestionIndex + 1 < questions.length) {
      dispatch({
        type: SET_NEXT_QUESTION,
        currentQuestionIndex: currentQuestionIndex + 1,
        currentQuestion: questions[currentQuestionIndex + 1],
      })
      return
    }
    dispatch({ type: SET_SHOW_RESULTS, showResults: true })
  }
  return showResults ? (
    <QuizContext.Provider value={{ state, dispatch }}>
      <Results />
    </QuizContext.Provider>
  ) : (
    <QuizContext.Provider value={{ state, dispatch }}>
      <div className='quiz gradient py-5'>
        {currentQuestion ? null : shuffleQuiz()}
        <Progress total={questions.length} current={currentQuestionIndex + 1} />
        <Question />
        {renderError()}
        <Answers />
        <button className='quiz-btn btn-primary' onClick={next}>
          Confirm and Continue
        </button>
      </div>
    </QuizContext.Provider>
  )
}

export default Quiz
