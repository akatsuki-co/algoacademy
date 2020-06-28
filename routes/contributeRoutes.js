const express = require("express")
const {
    contribute,
} = require("./../controllers/contributeController")
const { protect  } = require('./../controllers/authController')

const router = express.Router()

router
    .route("/")
    .post(protect, contribute)

module.exports = router
