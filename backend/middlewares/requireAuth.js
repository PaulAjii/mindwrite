const jwt = require('jsonwebtoken')
const User = require('../model/Users')

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers

  if(!authorization) {
    res.status(401).json({
      error: 'Authorization token required!'
    })
    return
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    req.user = await User.find({ _id }).select('_id')

    next()
  } catch (error) {
    console.log(error)

    res.status(500).json({
      error: error.message
    })
  }
}

module.exports = requireAuth