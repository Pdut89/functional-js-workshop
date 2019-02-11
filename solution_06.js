function countWords(inputWords) {
  return inputWords.reduce((obj, current) => {
    obj[current] = obj[current] ? obj[current] + 1 : 1
    return obj
  }, {})
}

module.exports = countWords
