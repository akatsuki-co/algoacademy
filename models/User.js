const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name']

    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        // will not display on res object
        //     select: false
        //
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please provide a password'],
        validate: {
            validator: function (el) {
                // this only works on create and save
                //         // abc123 = abc123
                //                 return el === this.password
                //
            },
            message: 'Passwords are not the same!'
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
})

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 12)
    this.passwordConfirm = undefined
    next()
})

userSchema.methods.correctPassword = async function (inputPassword, actualPassword) {
    return bcrypt.compare(inputPassword, actualPassword)
}

const User = mongoose.model("User", userSchema)

module.exports = User
