const express = require("express")
const mongoose = require("mongoose")

require("dotenv").config()

const app = require("./app")

const port = process.env.PORT || 5000
const db = process.env.DATABASE

// Database
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database is connected")
    })
    .catch((err) => {
        console.log("Database connection was unsuccessfull")
        console.log(err)
        process.exit(1)
    })

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
