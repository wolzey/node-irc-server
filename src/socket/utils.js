module.exports = {
  findMatchingUsername: (io, username) => {
    return io.socketsConnected.find((socket) => {
      if (!socket.user) return false
      socket.user.nickname === username
    })
  }
}
