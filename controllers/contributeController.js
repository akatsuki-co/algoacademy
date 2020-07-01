const catchAsync = require("./../utils/catchAsync")
const AppError = require('./../utils/appError')
const fs = require('fs')
const fetch = require('node-fetch')

exports.contribute = catchAsync(async(req, res, next) => {
    const username = req.body["username"]
    const topic = req.body["topic"]
    const markdown = req.body["markdown"]
    const today = new Date()
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    fs.writeFile(`./client/src/docs/contributions/${date}_${topic}-${username}.md`, markdown, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    })
    const githubResponse = await fetch("https://api.github.com/repos/akatsuki-co/algoacademy/issues",
        {
            headers: {"Authorization": "token " + process.env.GITHUB_TOKEN},
            method: "POST",
            body: JSON.stringify({
                "title": `${date} ${topic} - ${username}`,
                "body": markdown,
                "labels": ["enhancement"]
            })
        })
    const response = await githubResponse.json()
    await res.status(200).json({
        status: "success",
        response: response
    })
})

