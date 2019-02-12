function duckCount() {
  if (arguments.length === 0) return 0
  const pass = Object.prototype.hasOwnProperty.call(arguments[0], 'quack')
  delete arguments[0]
  return ( pass ? 1 : 0 ) + duckCount.call(...arguments)
}

module.exports = duckCount
