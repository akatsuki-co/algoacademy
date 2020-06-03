const shuffle = (array) => {
  let currentIndex = array.length
  while (currentIndex) {
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    let temp = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temp
  }
  return array
}

export default shuffle
