const express = require("express")
const {
    signToken,
    createSendToken,
    signUp,
    login,
    logout
} = require("./../controllers/authController")

const router = express.Router()

router.post("/signup", signUp)
router.post("/login", login)
router.get("/logout", logout)

module.exports = router
