const fs = require("fs")
const mongoose = require("mongoose")
const Quiz = require("./models/Quiz")
const Table = require("./models/Table")

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
const table = JSON.parse(
    fs.readFileSync(`${__dirname}/client/src/data/table.json`, "utf-8")
)

const importData = async () => {
    try {
        await Quiz.create(questions)
        await Table.create(table)
        console.log("Successfully imported table and questions")
    } catch (err) {
        console.log(err)
    }
    process.exit()
}

const deleteData = async () => {
    try {
        await Quiz.deleteMany()
        await Table.deleteMany()
        console.log("Successfully deleted tables and questions")
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
