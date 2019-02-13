// help from : https://abdulapopoola.com/2016/04/11/how-function-spies-work-in-javascript/
function Spy(target, method) {
  let spy = {
    count: 0
  }

  const original = target[method]

  target[method] = function() {
    spy.count += 1
    return original.apply(this, arguments)
  }

  return spy
}

module.exports = Spy
