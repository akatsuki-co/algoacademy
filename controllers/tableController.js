const Table = require("./../models/Table")
const catchAsync = require("./../utils/catchAsync")
const AppError = require('./../utils/appError')

exports.getTable = catchAsync(async(req, res, next) => {
    let filter = {}
    if (req.query.language) {
      filter = { language: req.query.language  }
    }
    const query = Table.find(filter)
    const quizzes = await query
    res.status(200).json({
      status: "success",
      results: quizzes.length,
      data: {
        data: quizzes
      }
    })
})

