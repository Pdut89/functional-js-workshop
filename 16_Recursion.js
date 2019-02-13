function getDependencies(tree, result = []) {
  if(!tree || !tree.dependencies) return []

  const deps = Object.keys(tree.dependencies)
  const res = []
  deps.forEach(dep => {
    res.push(
      `${dep}@${tree.dependencies[dep].version}`
    )
    return getDependencies(null, res)
  })




}

module.exports = getDependencies
