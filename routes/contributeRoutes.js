const express = require("express")
const {
    contribute,
} = require("./../controllers/contributeController")

const router = express.Router()

router
    .route("/")
    .post(contribute)

module.exports = router
