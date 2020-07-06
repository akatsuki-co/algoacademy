const express = require("express")
const {
    signToken,
    createSendToken,
    signUp,
    login,
    logout,
    protect
} = require("./../controllers/authController")

const router = express.Router()

router.post("/signup", signUp)
router.post("/login", login)
router.get("/logout",protect, logout)

module.exports = router
