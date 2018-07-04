const {
  Chat: {
    Events,
    Helpers
  }
} = require('../constants')

const {
  sendMessage,
  whisperUser
} = require('./handlers')

module.exports = [
  {
    command: Events.SEND,
    handler: sendMessage,
    helper: Helpers.SEND
  },
  {
    command: Events.WHISPER,
    handler: whisperUser,
    helper: Helpers.WHISPER
  }
]
