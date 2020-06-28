const catchAsync = require("./../utils/catchAsync")
const AppError = require('./../utils/appError')
const fs = require('fs')
const fetch = require('node-fetch')

exports.contribute = catchAsync(async(req, res, next) => {
    const title = req.body["title"]
    const markdown = req.body["markdown"]
    fs.writeFile(`./client/src/docs/contributions/${title}.md`, markdown, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    })
    const githubResponse = await fetch("https://api.github.com/repos/akatsuki-co/algoacademy/issues",
        {
            headers: {"Authorization": "token " + process.env.GITHUB_TOKEN},
            method: "POST",
            body: JSON.stringify({
                "title": "Test",
                "body": "Testing Github API at Tu's house",
                "labels": ["enhancement"]
            })
        })
    const response = await githubResponse.json()
    await res.status(200).json({
        status: "success",
        response: response
    })
})

