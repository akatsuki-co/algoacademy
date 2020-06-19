const express = require("express")
const path = require("path")
const compression = require("compression")
const cors = require("cors")
const mongoSanitize = require("express-mongo-sanitize")
const morgan = require("morgan")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const bodyParser = require("body-parser")

const quizRouter = require("./routes/quizRoutes")
const authRouter = require("./routes/authRoutes")

// Start app
const app = express()

// CORS
app.use(cors())

// Serve static files
app.use(express.static(path.join(__dirname, 'client', 'build')))

// Body parser
app.use(bodyParser.urlencoded({
       extended: false
}));

app.use(bodyParser.json());

// Sanitize against NoSQL query injections
app.use(mongoSanitize())

// Compress text files
app.use(compression())

// Morgan - HTTP request logger middleware
app.use(morgan("dev"))

// Swagger Options
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "AlgoAcademy API",
            description: "API endpoints for AlgoAcademy",
            contact: {
                name: "Ryuichi Miyazaki"
            },
            servers: ["http://localhost:5000"]
        }
    },
    apis: ["./routes/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

const router = express.Router()

// Mounting Routers - API endpoints
app.use("/", router)
app.use("/api/v1/quizzes", quizRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// all other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

module.exports = app
