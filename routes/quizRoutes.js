const express = require("express")
const {
    deleteQuiz,
    updateQuiz,
    createQuiz,
    getQuiz,
    getQuizzes
} = require("./../controllers/quizController")

const router = express.Router()

router
  .route("/")
  .get(getQuizzes)
  .post(createQuiz)

router
  .route("/:id")
  .get(getQuiz)
  .patch(updateQuiz)
  .delete(deleteQuiz)

module.exports = router
