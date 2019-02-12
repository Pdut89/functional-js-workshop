module.exports = function arrayMap(arr, fn) {
  return arr.reduce((sum, current) => {
    return [...sum, fn(current)]
  }, [])
}
