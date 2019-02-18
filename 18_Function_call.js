const slice = function() {
  const args = Array.prototype.slice.call(arguments[0])
  return args.slice(arguments[1], arguments[2])
}

module.exports = slice
