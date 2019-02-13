// help from : https://medium.com/@cukejianya/functional-js-trampolines-tails-88723b4da320

function repeat(operation, num) {
  function recur() {
    if (num <= 0) return
    operation()
    return recur.bind(null, operation, --num)
  }

  return trampoline(recur(operation, num))
}

function trampoline(fn) {
  while(fn && fn instanceof Function) {
   fn = fn()
  }
}

module.exports = repeat
