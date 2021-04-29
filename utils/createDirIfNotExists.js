const fs = require('fs')

const createDirIfNotExists = (logDirectory) => {
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
}

module.exports = createDirIfNotExists
