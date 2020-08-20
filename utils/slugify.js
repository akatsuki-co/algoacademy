const slugify = (string) => {
  return string
    .split(' ')
    .map((word) => word.toLowerCase())
    .join('_')
}

module.exports = slugify
