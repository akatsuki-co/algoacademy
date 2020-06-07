const fs = require("fs")
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

const Question = require("./models/Question")

require("dotenv").config()

const port = process.env.PORT
const db = process.env.DATABASE

const app = express()
app.get("/", (req, res) => {
    getAllQuestions(req, res)
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Mongo is connected to server")
    })

const getAllQuestions = async (req, res) => {
    const questions =  await Question.find()
    res.send({
        status: "success", questions
    })
}

