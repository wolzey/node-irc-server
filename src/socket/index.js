const { socketPort } = require('../../config')
const { registerRoutes } = require('../../utils')
const io = require('socket.io')(socketPort)

const ioRoutes = require('./routes')

module.exports = registerRoutes(ioRoutes, io)
