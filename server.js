const fs = require("fs")
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const Question = require("./models/Question")

require("dotenv").config()

const port = process.env.PORT
const db = process.env.DATABASE

const app = express()

app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(cors())

// Routes

// API Endpoints
app.get("/questions", (req, res) => {
    getAllQuestions(req, res)
})

// Database
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Mongo is connected to server")
    })

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

const getAllQuestions = async (req, res) => {
    const questions =  await Question.find()
    res.send({
        status: "success", questions
    })
}

