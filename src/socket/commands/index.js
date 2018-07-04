const {blue, green, red} = require('chalk')
const {
  Default: {
    Events,
    Helpers
  }
} = require('./constants')

const {
  handleChangeUserSetting,
  handleUserExit,
  handleUserJoinRoom
} = require('./default/handlers')

const ChatCommands = require('./chat')
const AdminCommands = require('./admin')

const commands = [
  {
    command: Events.NICK,
    handler: handleChangeUserSetting('nickname'),
    helper: Helpers.NICK
  },
  {
    command: Events.MODE,
    handler: handleChangeUserSetting('mode'),
    helper: Helpers.MODE
  },
  {
    command: Events.EXIT,
    handler: handleUserExit,
    helper: Helpers.EXIT
  },
  {
    command: Events.JOIN,
    handler: handleUserJoinRoom,
    helper: Helpers.JOIN
  },
  {
    command: Events.HELP,
    handler: (socket, io) => {
      let userCommands = commands.sort((a, b) => {
        return a.command > b.command
      })

      socket.emit('help', '\n' + userCommands.map((event) => (
        `/${event.command.toUpperCase()} ${green(event.helper || '') || ''}`)).join('\n')
      )
    },
    helper: Helpers.HELP
  },
  ...ChatCommands,
  ...AdminCommands
]

module.exports = commands
