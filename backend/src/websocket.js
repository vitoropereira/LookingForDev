const socktio = require('socket.io')

const parseStringsAsArray = require('./Utils/parseStringAsArray')
const calculateDIstance = require('./Utils/calculateDIstance')

let io
const connections = []

exports.setupWebsocket = (server) => {
  io = socktio(server)

  io.on('connection', socket => {
    console.log(socket.id)
    const { latitude, longitude, techs } = socket.handshake.query

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude)
      },
      techs: parseStringsAsArray(techs),
    })
  })
}

exports.findConnections = (coordinates, techs) => {
  return connections.filter(connection => {
    return calculateDIstance(coordinates, connection.coordinates) < 10
      && connection.tech.some(item => techs.includes(item))
  })
}

exports.sendMessage = (to, massage, data) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data)
  })
}