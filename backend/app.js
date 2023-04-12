require('dotenv').config()
const express = require('express')
const cors = require('cors')

const connectDB = require('./db/connectDB')
const { dashboard } = require('./controllers/Users')
const postRoute = require('./routes/Posts')
const userRoute = require('./routes/Users')

// Middlewares
const logger = require('./middlewares/logger')
const requireAuth = require('./middlewares/requireAuth')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.use('/api/v1/posts', postRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/dashboard', requireAuth, dashboard)

const start = async () => {
  try {
    await connectDB(process.env.DB_URI)
    console.log('DB conected successfully...')
    app.listen(process.env.PORT, () => console.log('server connected successfully...'))
  } catch (error) {
    console.log(error)
  }
}

start()