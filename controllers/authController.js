const User = require('./../models/User')
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id)
  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    // httpOnly: true,
  })
  user.password = undefined
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  })
}

exports.signUp = catchAsync(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  })
  createSendToken(user, 201, req, res)
})

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body
  // check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400))
  }
  // check if user exists && password is correct
  const user = await User.findOne({ email }).select('+password')
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401))
  }
  // if everything is ok, send token to client
  createSendToken(user, 200, req, res)
})

exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  })
  res.status(200).json({
    status: 'success',
  })
}

exports.protect = catchAsync(async (req, res, next) => {
  // get token and check if it exists
  let token
  const auth = req.headers.authorization
  if (auth && auth.startsWith('Bearer')) {
    token = auth.split(' ')[1]
  } else if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt
  } else {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    )
  }
  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    )
  }
  // validate token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

  // check if user still exists
  const freshUser = await User.findById(decoded.id)
  if (!freshUser) {
    return next(
      new AppError('The user belonging to this token no longer exists.', 401)
    )
  }
  // grant access to protected route
  req.user = freshUser
  res.locals.user = freshUser
  next()
})
