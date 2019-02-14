function logger(namespace) {
  return function() {
    console.log.apply(this, [namespace, ...arguments])
  }
}


module.exports = logger
