const catchAsync = require("./../utils/catchAsync")
const AppError = require('./../utils/appError')
const fs = require('fs')

exports.contribute = catchAsync(async(req, res, next) => {
    const username = req.body["username"].replace(/\s+/g, '_').toLowerCase()
    const topic = req.body["topic"].replace(/\s+/g, '_').toLowerCase()
    const markdown = req.body["markdown"]
    const today = new Date()
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    fs.writeFile(`./client/src/docs/contributions/${date}_${username}-${topic}.md`, markdown, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    })
    await res.status(200).json({
        status: "success"
    })
})

