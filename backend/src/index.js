const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-gh3ed.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

//METODOS: GET, POST, PUT, DELETE

//QUERY PARAMS: request.query (filtros, ordenação paginação,...)
//ROUTE PARAMS: request.params (identificar um recurso na alteração ou remoção)
//BODY: request.body (Dados para criação ou alteração de um registro.)
//

server.listen(3333)