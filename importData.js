const fs = require("fs")
const mongoose = require("mongoose")
const Quiz = require("./models/Quiz")
const TableOfContents = require("./models/TableOfContents")

require("dotenv").config()

const db = process.env.DATABASE

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Mongo is connected")
    })

const questions = JSON.parse(
    fs.readFileSync(`${__dirname}/client/src/data/quiz.json`, "utf-8")
)
const tableOfContents = JSON.parse(
    fs.readFileSync(`${__dirname}/client/src/data/tableOfContents.json`, "utf-8")
)

const importData = async () => {
    try {
        await Quiz.create(questions)
        await TableOfContents.create(tableOfContents)
        console.log("Successfully imported tableOfContents and questions")
    } catch (err) {
        console.log(err)
    }
    process.exit()
}

const deleteData = async () => {
    try {
        await Quiz.deleteMany()
        console.log("Successfully deleted questions")
    } catch (err) {
        console.log(err)
    }
    process.exit()
}

mongoose.connection.once("open", () => {
    const argv = process.argv[2]
    if (argv === "--import") {
        importData()
    } else if (argv === "--delete") {
        deleteData()
    }
})
