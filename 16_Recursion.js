var loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }

      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
}

function getDependencies(tree, result = []) {
  console.log([tree])
  if (!tree.hasOwnProperty('dependencies')) return result

  const {dependencies} = tree

  Object.keys(dependencies).forEach(key => {
    result = [...result, `${key}@${dependencies[key].version}`]
  })

  return getDependencies(dependencies, result)

}





console.log('result: ', getDependencies(loremIpsum))





module.exports = getDependencies
