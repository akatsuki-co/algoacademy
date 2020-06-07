const fs = require("fs")
const mongoose = require("mongoose")
const Question = require("./models/Question")

const mongo_string = "mongodb+srv://rmiyazaki:Rache6499@algoacademy-y4tcj.mongodb.net/test?retryWrites=true&w=majority"

mongoose
    .connect(mongo_string, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(() => {
            console.log("Mongo is connected")
    })

const questions = JSON.parse(
            fs.readFileSync(`${__dirname}/data.json`, "utf-8")
)

const importData = async () => {
    try {
                await Question.create(questions)
                    console.log("Successfully importing questions")
    } catch (err) {
                console.log(err)
    }
        process.exit()
}

const deleteData = async () => {
    try {
                await Question.deleteMany()
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
