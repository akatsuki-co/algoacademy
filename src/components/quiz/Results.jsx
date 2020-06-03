import React, { useContext } from "react"
import QuizContext from "../../context/QuizContext"
import { useHistory } from "react-router-dom"
import { RESET_QUIZ } from "../../reducers/types.jsx"

import "./styles.css"

const Results = () => {
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
  let history = useHistory()
  const { state, dispatch } = useContext(QuizContext)
  const { answers } = state

  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct">Correct</span>
    }
    return <span className="failed">Failed</span>
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
    history.push("/quiz")
  }
  return (
    <div className="quiz results gradient">
      <h2>Results</h2>
      <ul>{renderResultsData()}</ul>
      <button className="quiz-btn btn-primary" onClick={restart}>
        Go Back
      </button>
    </div>
  )
}

export default Results
