const { findMatchingUsername } = require('../../../socket/utils')

module.exports = {
  sendMessage: (socket, io, message) => {
    console.log('Sending Message to', socket.user.room)
    io.to(socket.user.room).emit('user message', {username: socket.user.nickname, message})
  },
  whisperUser: (socket, io, {message, username}) => {
    // Get sockets connected and send message to matching username
    let destinationSocket = findMatchingUsername(io, username)
    if (!destinationSocket) {
      return socket.emit('no:user')
    }

    destinationSocket.emit('whisper', {message, username})
  }
}
