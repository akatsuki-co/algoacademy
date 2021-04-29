const catchAsync = require('./../utils/catchAsync')
const slugify = require('./../utils/slugify')
const fs = require('fs')
const logger = require('../config/winston-config-stream')

const CONTRIBUTE_URL = './client/src/docs/contributions/'

exports.contribute = catchAsync(async (req, res, next) => {
  const username = slugify(req.body['username'])
  const topic = slugify(req.body['topic'])
  const markdown = req.body['markdown']
  const today = new Date()
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`
  fs.writeFile(
    `${CONTRIBUTE_URL}${date}_${username}-${topic}.md`,
    markdown,
    function (err) {
      if (err) throw err
      logger.info('File is created successfully.')
    }
  )
  await res.status(200).json({
    status: 'success',
  })
})
