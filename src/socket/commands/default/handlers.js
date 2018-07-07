module.exports = {
  handleChangeUserSetting: (setting) => {
    return (socket, io, data) => {
      socket.user[setting] = data
      socket.emit(setting, data)
    }
  },
  handleUserExit: (socket, io) => {
    io.to(socket.user.room).emit('user leave', socket.user.nickname)
    return socket.disconnect()
  },
  handleUserJoinRoom: (socket, io, room) => {
    if (!socket.user.nickname) return socket.emit('user join error', 'Need to set nickname with /nick before joining')
    socket.user.room = room
    socket.join(room)
    io.to(socket.user.room).emit('user join', {room, user: socket.user.nickname})
  }
}
