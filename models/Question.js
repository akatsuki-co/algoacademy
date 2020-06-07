const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Please provide a question"],
    },
    answers: {
        "1": {type: String, required: true},
        "2": {type: String, required: true},
        "3": {type: String, required: true},
        "4": {type: String, required: true},
    },
    correct: {
        type: [String],
        required: [true, "Please provide a correct answer"]
    }
})

const Question = mongoose.model("Question", questionSchema)

module.exports = Question
