import React, { useReducer } from "react"
import Progress from "./Progress"
import Question from "./Question"
import Answers from "./Answers"
import Results from "./Results"
import QuizContext from "../../context/QuizContext"

import "./styles.css"

import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER,
  SET_ERROR,
  SET_SHOW_RESULTS,
  RESET_QUIZ,
} from "../../reducers/types.jsx"
import quizReducer from "../../reducers/QuizReducer"

function Quiz() {
  const questions = [
    {
      id: 1,
      question: "Which statement about Hooks is not true?",
      answer_a:
        "Hooks are 100% backwards-compatible and can be used side by side with classes",
      answer_b: "Hooks are still in beta and not available yet",
      answer_c:
        "Hooks are completely opt-in, there's no need to rewrite existing code",
      answer_d: "All of the above",
      correct_answer: "b",
    },
    {
      id: 2,
      question: "Which one is not a Hook?",
      answer_a: "useState()",
      answer_b: "useConst()",
      answer_c: "useReducer()",
      answer_d: "All of the above",
      correct_answer: "b",
    },
    {
      id: 3,
      question: "What Hook should be used for data fetching?",
      answer_a: "useDataFetching()",
      answer_b: "useApi()",
      answer_c: "useEffect()",
      answer_d: "useRequest()",
      correct_answer: "c",
    },
  ]

  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: "",
    answers: [],
    showResults: false,
    error: "",
  }

  const [state, dispatch] = useReducer(quizReducer, initialState)
  const { currentQuestion, currentAnswer, answers, showResults, error } = state
  const question = questions[currentQuestion]

  const renderError = () => {
    if (!error) {
      return
    }
    return <div className="error">{error}</div>
  }

  const next = () => {
    const answer = { questionId: question.id, answer: currentAnswer }
    if (!currentAnswer) {
      dispatch({ type: SET_ERROR, error: "Please select an option" })
      return
    }
    answers.push(answer)
    dispatch({ type: SET_ANSWERS, answers })
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: "" })
    if (currentQuestion + 1 < questions.length) {
      dispatch({
        type: SET_CURRENT_QUESTION,
        currentQuestion: currentQuestion + 1,
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
      <div className="quiz gradient py-5">
        <Progress total={questions.length} current={currentQuestion + 1} />
        <Question />
        {renderError()}
        <Answers />
        <button className="quiz-btn btn-primary" onClick={next}>
          Confirm and Continue
        </button>
      </div>
    </QuizContext.Provider>
  )
}

export default Quiz
