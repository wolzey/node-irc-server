const {
  Admin: {
    Events,
    Helpers
  }
} = require('../constants')

const {
  handleBlockUser,
  handleKickUser,
  handleAdminLogin
} = require('./handlers')

module.exports = [
  {
    command: Events.BLOCK,
    handler: handleBlockUser,
    helper: Helpers.BLOCK
  },
  {
    command: Events.KICK,
    handler: handleKickUser,
    helper: Helpers.KICK
  },
  {
    command: Events.LOGIN,
    handler: handleAdminLogin,
    helper: Helpers.LOGIN
  }
]
