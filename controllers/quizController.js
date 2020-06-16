const Quiz = require("./../models/Quiz")
const catchAsync = require("./../utils/catchAsync")
const AppError = require('./../utils/appError')

exports.deleteQuiz = catchAsync(async(req, res, next) => {
    const quiz = await Quiz.findByIdAndDelete(req.params.id)
    console.log(quiz)
    if (!quiz) {
        return next(new AppError("No Quiz with that ID", 404))
    }
    res.status(204).json({
        status: "success",
        data: null
    })
})

exports.updateQuiz = catchAsync(async(req, res, next) => {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    if (!quiz) {
        return next(new AppError("No Quiz with that ID", 404))
    }
    res.status(200).json({
        status: "success",
        data: {
            data: quiz
        }
    })
})

exports.createQuiz = catchAsync(async(req, res) => {
    const quiz = await Quiz.create(req.body)
    console.log(req.body)
    if (!quiz) {
        return next(new AppError("Question was not created...", 404))
    }
    res.status(201).json({
        status: "success",
        data: {
            data: quiz
        }
    })
})

exports.getQuiz = catchAsync(async(req, res) => {
    let query = await Quiz.findById(req.params.id)
    const quiz = await query
    if (!quiz) {
        return next(new AppError("No Quiz with that ID", 404))
    }
    res.status(200).json({
        status: "success",
        data: {
            data: quiz
        }
    })
})

exports.getQuizzes = catchAsync(async(req, res, next) => {
    let filter = {}
    if (req.query.topic) {
        filter = { topic: req.query.topic }
    }
    const query = Quiz.find(filter)
    const quizzes = await query
    res.status(200).json({
        status: "success",
        results: quizzes.length,
        data: {
            data: quizzes
        }
    })
})
