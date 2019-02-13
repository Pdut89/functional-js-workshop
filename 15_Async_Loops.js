// function loadUsers(userIds, load, done) {
//   const users = userIds.map(id => {
//     return (
//       load(id, (user) => {
//         return user
//       })
//     )
//   })
//   return done(users)
// }

function loadUsers(userIds, load, done) {
  const users = []
  userIds.forEach((userId, i) => {
    load(userId, user => {
      users[i] = user
      if(users.length === userIds.length) return done(users)
    })
  })
}

module.exports = loadUsers
