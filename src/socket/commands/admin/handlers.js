const { findMatchingUsername } = require('../../utils')
const { adminPassword, adminUsername } = require('../../config');

const isAdminLogin = (username, password) => {
  if ((username !== adminUsername) || (password !== adminPassword)) return false
  return true
}

module.exports = {
  handleBlockUser: (socket, io, {username}) => {
    const offendingUser = findMatchingUsername(io, username)
    const offendingHost = offendingUser.handshake.hostname

    io.blockedUsers.push(offendingHost)
  },
  handleKickUser: (socket, io, {username, room}) => {
    const offendingUser = findMatchingUsername(io, username)
    offendingUser.leave(room)
  },
  handleAdminLogin: (socket, io, {username, password}) => {
    if (!isAdminLogin(username, password)) return socket.emit('unauthorized')

    socket.user.isAdmin = true
    socket.user.nickname = username

    socket.emit('admin:loggedin')
  }
}
