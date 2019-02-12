const getShortMessages = messages => messages
  .filter(msgObj => msgObj.message.length < 50)
  .map(msgObj => msgObj.message)


// with recursion:
// function getShortMessages(messages) {
//   if(messages.length === 0) return messages
//   const newArr = messages[0].message.length < 50 ? [messages[0].message] : []
//   return newArr.concat(getShortMessages(messages.slice(1)))
// }

module.exports = getShortMessages
