
function getDependencies(tree, result = []) {
  if(!tree || !tree.hasOwnProperty('dependencies')) return result.sort()

  const {dependencies} = tree

  Object.keys(dependencies).forEach(dep => {
    const nextTree = dependencies[dep]
    const entry = `${dep}@${dependencies[dep].version}`
    if(!result.includes(entry)) result.push(entry)

    getDependencies(nextTree, result)
  })

  return result.sort()
}

module.exports = getDependencies
