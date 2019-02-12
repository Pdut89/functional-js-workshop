var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(this, [namespace, ...slice.call(arguments)])
  }
}


module.exports = logger
