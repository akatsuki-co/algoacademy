const express = require("express")
const path = require("path")
const cors = require("cors")
const mongoSanitize = require("express-mongo-sanitize")
const compression = require("compression")

const quizRouter = require("./routes/quizRoutes")

// Start app
const app = express()

// CORS
app.use(cors())

// Serve static files
app.use(express.static(path.join(__dirname, 'client', 'build')))

// Sanitize against NoSQL query injections
app.use(mongoSanitize())

// Compress text files
app.use(compression())

const router = express.Router()

// Mounting Routers - API endpoints
app.use("/", router)
app.use("/api/v1/quizzes", quizRouter)
router.get("/test", (req, res) => {
    res.status(200).json({
        "status": "Message success"
    })
})

// all other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

module.exports = app
