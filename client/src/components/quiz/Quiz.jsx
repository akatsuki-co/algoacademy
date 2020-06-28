import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom'
import Progress from './Progress'
import Question from './Question'
import Answers from './Answers'
import Results from './Results'
import QuizContext from '../../context/QuizContext'
import {
  SET_ANSWERS,
  SET_NEXT_QUESTION,
  RESET_CURRENT_ANSWER,
  SET_ERROR,
  LOAD_QUESTIONS,
} from '../../reducers/types.jsx'
import quizReducer from '../../reducers/QuizReducer'
import shuffle from '../../utils/shuffle'
import compareAnswers from '../../utils/compareAnswers'

import './styles.css'

function Quiz() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isGameOver, setGameOver] = useState(false)
  const params = useParams()
  const initialState = {
    questions: [],
    currentQuestionIndex: 0,
    currentAnswer: [],
    answers: {},
    error: '',
  }
  const [state, dispatch] = useReducer(quizReducer, initialState)
  const {
    questions,
    currentQuestionIndex,
    currentAnswer,
    answers,
    error,
  } = state

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const host = process.env.REACT_APP_HOST
        const req = await fetch(
          `${host}/api/v1/quizzes?topic=${params.topic}`
        )
        const questionsArr = await req.json()
        const shuffledQuestions = shuffle(questionsArr.data)
        dispatch({
          type: LOAD_QUESTIONS,
          questions: shuffledQuestions,
        })
        setIsLoaded(true)
      } catch (err) {
        console.log(err)
      }
    }
    loadQuestions()
  }, [params])

  const renderError = () => {
    if (!error) return
    return <div className="error">{error}</div>
  }

  const next = () => {
    if (!currentAnswer.length)
      return dispatch({ type: SET_ERROR, error: 'Please select an option' })
    dispatch({ type: RESET_CURRENT_ANSWER })
    if (
      !compareAnswers(
        questions[currentQuestionIndex].correct_answer,
        currentAnswer
      )
    ) {
      answers[currentQuestionIndex] = false
      return dispatch({
        type: SET_ERROR,
        error: 'Incorrect answer. Try again!',
      })
    }
    if (answers[currentQuestionIndex] === undefined)
      answers[currentQuestionIndex] = true
    dispatch({ type: SET_ANSWERS, answers })
    if (currentQuestionIndex + 1 < questions.length) {
      return dispatch({
        type: SET_NEXT_QUESTION,
        currentQuestionIndex: currentQuestionIndex + 1,
      })
    }
    setGameOver(true)
  }

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {isGameOver ? (
        <Results />
      ) : isLoaded ? (
        <div className="quiz gradient py-2">
          <Progress
            total={questions.length}
            current={currentQuestionIndex + 1}
          />
          <Question />
          {renderError()}
          <Answers />
          <button className="quiz-btn btn-primary" onClick={next}>
            Confirm and Continue
          </button>
        </div>
      ) : null}
    </QuizContext.Provider>
  )
}

export default Quiz
