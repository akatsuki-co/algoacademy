const Quiz = require("./../models/Quiz")

// Catches errors
catchAsync = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next)
    };
}

exports.deleteQuiz = catchAsync(async(req, res, next) => {
    const quiz = await Quiz.findByIdAndDelete(req.params.id)
    if (!quiz) {
        return "No Quiz with that ID"
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
        return "No Quiz with that ID"
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
        return "No Quiz with that ID"
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
    if (req.params.topic) {
        filter = { topic: req.params.topic }
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
