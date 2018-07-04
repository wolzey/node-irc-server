module.exports = {
  registerRoutes: (routeConfig, io) => {
    return (config = {}) => {
      io.on('connection', (socket) => {
        socket.user = {}
        routeConfig.routes.commands.map((event) => {
          socket.on(event.command, event.handler.bind(null, socket, io))
        })
      })
    }
  },
  getPortFromENV: () => {
    return process.env.PORT || 3000
  }
}
