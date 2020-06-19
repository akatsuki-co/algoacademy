import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION_INDEX,
  SET_CURRENT_QUESTION,
  SET_NEXT_QUESTION,
  SET_CURRENT_ANSWER,
  REMOVE_CURRENT_ANSWER,
  RESET_CURRENT_ANSWER,
  SET_ERROR,
  SET_SHOW_RESULTS,
  RESET_QUIZ,
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
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.currentQuestion,
      }

    case SET_NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: action.currentQuestionIndex,
        currentQuestion: action.currentQuestion,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case SET_SHOW_RESULTS:
      return {
        ...state,
        showResults: action.showResults,
      }
    case SET_ANSWERS:
      return {
        ...state,
        answers: action.answers,
      }
    case RESET_QUIZ:
      return {
        ...state,
        answers: [],
        currentQuestionIndex: 0,
        currentAnswer: '',
        showResults: false,
        error: '',
      }
    case LOAD_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
      }
    default:
      return state
  }
}

export default quizReducer
