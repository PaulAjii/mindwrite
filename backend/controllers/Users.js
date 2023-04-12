const User = require('../model/Users')
const jwt = require('jsonwebtoken')

const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '7d' })
}

const registerUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.signup(email, password)

    const token = generateToken(user._id)

    res.status(201).json({
      email,
      token
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  } 
}

const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.login(email, password)

    const token = generateToken(user._id)

    res.status(200).json({
      email,
      token
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  } 
}

const dashboard = async (req, res) => {
  try {
    const user_id = req.user[0]._id

    const user = await User.findById(user_id)

    res.status(200).json({
      user
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

module.exports = {
  registerUser,
  loginUser,
  dashboard
}