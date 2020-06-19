const express = require("express")
const {
    getTable,
} = require("./../controllers/tableController")

const router = express.Router()

router
    .route("/")
    .get(getTable)

module.exports = router
