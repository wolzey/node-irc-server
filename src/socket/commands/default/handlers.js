module.exports = {
  handleChangeUserSetting: (setting) => {
    return (socket, io, data) => {
      socket.user[setting] = data
      socket.emit(setting, data)
    }
  },
  handleUserExit: (socket, io) => {
    console.log(`${socket.user.nickname} disconnected`)
    return socket.disconnect()
  },
  handleUserJoinRoom: (socket, io, room) => {
    socket.user.room = room
    socket.join(room)
    io.to(socket.user.room).emit('user join', {room, user: socket.user.nickname})
  }
}
