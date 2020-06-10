const Quiz = require("./../models/Quiz")


catchAsync = fn => {
    // returns an anonymous function
    return (req, res, next) => {
        fn(req, res, next).catch(next)
    };
}

exports.deleteQuiz = () =>
    catchAsync(async(req, res, next) => {
        const quiz = await Quiz.findByIdAndDelete(req.params.id)
        if (!quiz) {
            return "No Quiz with that ID"
        }
        res.status(204).json({
            status: "success",
            data: null
        })
    })

exports.updateQuiz = () =>
    async(req, res) => {
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
    }

exports.createQuiz = () =>
    async(req, res) => {
        const quiz = await Quiz.create(req.body)
        res.status(201).json({
            status: "success",
            data: {
                data: quiz
            }
        })
    }

exports.getQuiz = () =>
    async(req, res) => {
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
    }

exports.getQuizzes = () =>
    catchAsync(async(req, res, next) => {
        let filter = {}
        console.log("We are in the getQuizzes method")
        if (req.params.topic) {
            filter = { topic: req.params.topic }
        }
        console.log("We are going to get the query")
        const query = Quiz.find(filter)
        console.log("We will now fetch the quizzes")
        const quizzes = await query
        console.log(`We should have some quizzes ${quizzes}`)
        res.status(200).json({
            status: "success",
            results: quizzes.length,
            data: {
                data: quizzes
            }
        })
    })
