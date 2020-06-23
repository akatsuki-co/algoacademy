import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION_INDEX,
  SET_NEXT_QUESTION,
  SET_CURRENT_ANSWER,
  REMOVE_CURRENT_ANSWER,
  RESET_CURRENT_ANSWER,
  SET_ERROR,
  LOAD_QUESTIONS,
} from './types.jsx'

const quizReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: [...state.currentAnswer, action.currentAnswer],
      }
    case REMOVE_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: state.currentAnswer.filter(
          (el) => el !== action.currentAnswer
        ),
      }
    case RESET_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: [],
      }
    case SET_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: action.currentQuestionIndex,
      }
    case SET_NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: action.currentQuestionIndex,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case SET_ANSWERS:
      return {
        ...state,
        answers: action.answers,
      }
    case LOAD_QUESTIONS:
      return {
        ...state,
        questions: [...action.questions],
      }
    default:
      return state
  }
}

export default quizReducer
