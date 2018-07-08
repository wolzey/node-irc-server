const { findMatchingUsername } = require('../../../socket/utils')

module.exports = {
  sendMessage: (socket, io, message) => {
    if (!socket.user.room) return socket.emit('message error', 'You need to join a room first `/join`')
    io.sockets.in(socket.user.room).emit('user message', {username: socket.user.nickname, message})
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
