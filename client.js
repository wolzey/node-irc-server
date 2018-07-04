const socket = require('socket.io-client')('http://localhost:1337')
const {blue, green, red} = require('chalk')
const readline = require('readline')


socket.on('connect', () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.setPrompt("> ")
  rl.prompt()

  rl.on('line', (line) => {
    if (line == '/clear') {
      process.stdout.write('\033c')
    }
    line    = line.toString().trim()

    if (!line.match(/^\//)) {
      return socket.emit('send', line)
    }

    command = line.split(' ')[0].slice(1)
    args    = line.split(' ').slice(1)

    socket.emit(command, args.join(' '))
    rl.prompt()
  })

  socket.emit('nick', 'Wolzey')

  socket.on('user join', ({user, room}) => {
    console.log(blue(user), green('just joined room'), red.bold(room))
  })

  socket.on('user message', ({username, message}) => {
    console.log(blue(`<${username}>:`), message)
  })

  socket.on('help', (commands) => {
    process.stdout(commands + '\n')
  })

  // stdin.addListener('data', (data) => {

  // })
})
