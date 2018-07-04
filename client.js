const socket = require('socket.io-client')('http://localhost:1337')
const {blue, green, red} = require('chalk')

socket.on('connect', () => {
  socket.emit('nick', 'Wolzey')
  socket.emit('join', 'backroom')

  socket.on('user join', (room) => {
    console.log(green('User just joined room'), red.bold(room))
  })

  socket.on('user message', ({username, message}) => {
    console.log(green(`<${username}>:`), message)
  })

  socket.emit('send', 'Hey there!')
  socket.emit('exit')
})
