const express = require("express")
const {
    deleteQuiz,
    updateQuiz,
    createQuiz,
    getQuiz,
    getQuizzes
} = require("./../controllers/quizController")

const router = express.Router()

/**
 * @swagger
 * /api/v1/quizzes:
 *    get:
 *      description: Returns an array of Quizzes
 *      parameters:
 *        - name: topic
 *          description: Topic of quizzes
 *          type: string
 *          format: string
 *      responses:
 *        '200':
 *          description: Successfully return an array of Quizzes
 *    post:
 *      description: Returns a new Quiz question
 *      parameters:
 *        - in: body
 *          name: quiz
 *          description: Details of a new quiz question
 *          schema:
 *            type: object
 *            required:
 *              - question
 *            properties:
 *              question:
 *                type: string
 *              answers:
 *                type: object
 *                properties:
 *                  a:
 *                    type: string
 *                  b:
 *                    type: string
 *                  c:
 *                    type: string
 *                  d:
 *                    type: string
 *              correct_answer:
 *                type: array
 *                items:
 *                  type: string
 *              topic:
 *                type: string
 *      responses:
 *        '201':
 *          description: Successfully created a Quiz question
 */
router
    .route("/")
    .get(getQuizzes)
    .post(createQuiz)

/**
 * @swagger
 * /api/v1/quizzes/{id}:
 *    get:
 *      description: Returns a Quiz question
 *      parameters:
 *        - in: path
 *          name: id
 *          description: id of the Quesion object
 *          type: string
 *          format: string
 *      responses:
 *        '200':
 *          description: Successfully return an array of Quizzes
 *    patch:
 *      summar: Update a Question
 *      description: Update a Quiz question object
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Details of updated quiz question
 *        - in: body
 *          schema:
 *            type: object
 *            required:
 *              - question
 *            properties:
 *              question:
 *                type: string
 *              answers:
 *                type: object
 *                properties:
 *                  a:
 *                    type: string
 *                  b:
 *                    type: string
 *                  c:
 *                    type: string
 *                  d:
 *                    type: string
 *              correct_answer:
 *                type: array
 *                items:
 *                  type: string
 *              topic:
 *                type: string
 *      responses:
 *        '200':
 *          description: Successfully created a Quiz question
 *        '204':
 *          description: Successfully created a Quiz question (No content)
 *    delete:
 *      description: Deletes a Quiz question
 *      parameters:
 *        - name: id
 *          description: id of the Quesion object
 *          type: string
 *          format: string
 *      responses:
 *        '200':
 *          description: Successfully return an array of Quizzes
 */
router
    .route("/:id")
    .get(getQuiz)
    .patch(updateQuiz)
    .delete(deleteQuiz)

module.exports = router
