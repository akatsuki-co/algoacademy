const fs = require("fs")
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

const Question = require("./models/Question")

const app = express()
app.get("/", (req, res) => {
    getAllQuestions(req, res)

})

const port = 5000

const mongo_string = "mongodb+srv://rmiyazaki:Rache6499@algoacademy-y4tcj.mongodb.net/test?retryWrites=true&w=majority"

app.listen(port, () => {
    console.log(`listening on port ${port}`)

})

mongoose
    .connect(mongo_string, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,

    }).then(() => {
        console.log("Mongo is connected")

    })

const getAllQuestions = async (req, res) => {
    const questions =  await Question.find()
    res.send({
        status: "success", questions

    })

}

