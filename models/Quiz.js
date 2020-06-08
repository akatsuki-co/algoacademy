const mongoose = require("mongoose")

const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Please provide a question"]
    },
    answers: {
        "a": {type: String, required: true},
        "b": {type: String, required: true},
        "c": {type: String, required: true},
        "d": {type: String, required: true},
    },
    correct_answer: {
        type: [String],
        required: [true, "Please provide a correct answer"]
    },
    topic: {
        type: String,
        required: [true, "Please provide a topic"]
    }
})

const Quiz = mongoose.model("Quiz", quizSchema)

module.exports = Quiz
