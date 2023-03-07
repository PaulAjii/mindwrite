const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
})

userSchema.statics.signup = async function(email, password) {
  if(!email || !password) {
    throw Error('All fields are required!')
  }

  if(!validator.isEmail(email)) {
    throw Error('Email is not a valid email!')
  }

  if(!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough!')
  }

  const emailExists = await this.findOne({ email })

  if(emailExists) {
    throw Error('User already registered!')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash})

  return user
}

userSchema.statics.login = async function(email, password) {
  if(!email || !password) {
    throw Error('All fields are required!')
  }

  const user = await this.findOne({ email })

  if(!user) {
    throw Error("Email or Password is incorrect!")
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if(!passwordMatch) {
    throw Error("Email or Password is incorrect!")
  }

  return user
}

module.exports = mongoose.model('User', userSchema)