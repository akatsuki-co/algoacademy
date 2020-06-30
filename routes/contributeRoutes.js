const express = require("express")
const {
    contribute,
} = require("./../controllers/contributeController")
const rateLimit = require("express-rate-limit")
const { protect  } = require('./../controllers/authController')

const router = express.Router()

const contributeLimiter = rateLimit({
      windowMs: 60 * 60 * 1000,
      max: 10,
      message:
        "Too many contributions from this IP, please try again after an hour"
})

router
    .route("/")
    .post(protect, contributeLimiter, contribute)

module.exports = router
