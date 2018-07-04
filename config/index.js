const { getPortFromENV } = require('../utils')

module.exports = {
  adminUsername: 'SuperAdmin',
  adminPassword: 'SuperSecret',
  PORT: getPortFromENV(),
  socketPort: process.env.SOCKET_PORT || 1337
}
