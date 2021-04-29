const fs = require('fs')
const mongoose = require('mongoose')
const Quiz = require('../models/Quiz')
const Table = require('../models/Table')
const dotenv = require('dotenv')

const logger = require('../config/winston-config-stream')

dotenv.config({ path: '../.env' })

const db = process.env.DATABASE

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

const ccp_questions = JSON.parse(
  fs.readFileSync(`${__dirname}/ccp_quiz.json`, 'utf-8')
)
const python_questions = JSON.parse(
  fs.readFileSync(`${__dirname}/python_quiz.json`, 'utf-8')
)
const react_questions = JSON.parse(
  fs.readFileSync(`${__dirname}/react_quiz.json`, 'utf-8')
)

const table = JSON.parse(fs.readFileSync(`${__dirname}/tables.json`, 'utf-8'))

const importData = async () => {
  try {
    await Quiz.create(ccp_questions)
    await Quiz.create(python_questions)
    await Quiz.create(react_questions)
    await Table.create(table)
    logger.info('Successfully imported table and questions.')
  } catch (err) {
    logger.error(err)
  }
}

const deleteData = async () => {
  try {
    await Quiz.deleteMany()
    await Table.deleteMany()
    logger.info('Successfully deleted tables and questions.')
  } catch (err) {
    logger.error(err)
  }
}

mongoose.connection.once('open', async () => {
  const argv = process.argv[2]
  try {
    if (argv === '--import') {
      await importData()
    } else if (argv === '--delete') {
      await deleteData()
    } else if (argv === '--migrate') {
      await deleteData()
      await importData()
    }
  } catch (err) {
    logger.info(err)
  }
  process.exit()
})
