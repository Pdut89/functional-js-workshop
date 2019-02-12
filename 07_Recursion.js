function reduce(arr, fn, initial) {
  if (!arr.length) return initial
  const res = fn(initial, arr[0])
  return reduce(arr.slice(1), fn, res)
}

module.exports = reduce
