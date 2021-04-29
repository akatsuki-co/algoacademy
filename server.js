const mongoose = require('mongoose')

require('dotenv').config()

const app = require('./app')
const logger = require('./config/winston-config-stream')

const port = process.env.PORT || 5000
const db = process.env.DATABASE

// Database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('Database is connected.')
  })
  .catch((err) => {
    logger.error(`Database connection was unsuccessful: ${err}`)
    process.exit(1)
  })

app.listen(port, () => {
  logger.info(`Listening on port ${port}.`)
})
