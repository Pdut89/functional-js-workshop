function upperCaser(input) {
  if (!input.length) return ''
  return input[0].toUpperCase() + upperCaser(input.slice(1))
}

module.exports = upperCaser
