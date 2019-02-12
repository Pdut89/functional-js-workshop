function duckCount() {
  console.log(arguments)
  Object.values(arguments).forEach((val, index) => {
    console.log(index, val)
    console.log(val.hasOwnProperty('quack'))
  })
  return {}
}

module.exports = duckCount
