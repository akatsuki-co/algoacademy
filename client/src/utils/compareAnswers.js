export default (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let el of arr1) {
    if (!arr2.includes(el)) return false
  }
  return true
}
