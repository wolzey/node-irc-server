const socket = require('socket.io-client')('http://localhost:1337')
const {blue, green, red} = require('chalk')

socket.on('connect', () => {
  socket.emit('nick', 'Wolzey')
  socket.emit('join', 'backroom')

  socket.on('user join', (room) => {
    console.log(green('User just joined room'), red.bold(room))
  })

  socket.on('user message', ({username, message}) => {
    console.log(blue(`<${username}>:`), message)
  })

  socket.on('help', (commands) => {
    console.log(commands + '\n')
  })

  socket.emit('help')

  socket.emit('send', 'Hey there!')
  socket.emit('send', 'How are you?')
  socket.emit('send', 'I\'m good!')

  socket.emit('exit')
})
