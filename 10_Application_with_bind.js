module.exports = function(namespace) {
  return console.log.bind(this, ...arguments)
}
