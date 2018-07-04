module.exports = {
  Default: {
    Events: {
      NICK: 'nick',
      MODE: 'mode',
      EXIT: 'exit',
      JOIN: 'join',
      HELP: 'help'
    },
    Helpers: {
      NICK: '[nickname] - Set nickname',
      MODE: '[mode] - Change user mode',
      EXIT: '- Leaves server',
      JOIN: '[room name] - Join chat room'
    }
  },
  Admin: {
    Events: {
      BLOCK: 'block',
      KICK: 'kick',
      LOGIN: 'login'
    },
    Helpers: {
      BLOCK: '[username] - Blocks user from server',
      KICK: '[{username, room}] - Kicks user from chat room',
      LOGIN: '[{username, password}] - Login as admin'
    }
  },
  Chat: {
    Events: {
      SEND: 'send',
      WHISPER: 'whisper'
    },
    Helpers: {
      SEND: '[message] - Send message to room',
      WHISPER: '[username] - Direct message user'
    }
  }
}
