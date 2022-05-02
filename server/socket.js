import express from 'express'
import http from 'http'
import { Server } from "socket.io"
const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:8080","http://localhost:8081"],
    // credentials: true
  }
})
import Clients from './clients.js'
const client = new Clients()
// const User = require('./models/User')
// const Notifycation = require('./models/Notifycation')
// const webpush = require('./webpush')

io.on('connection', socket => {
  // срабатывает при входе
  socket.on('clientJoined', async data => {
    const user = data
    user.socket = socket.id
    client.addClient(user)
    // let user = await User.findOne({ where: { id: data.userId } }); 
    // user.online = "Y";
    // await user.save();
    console.log(client.getClients());
    socket.emit('clientJoined', client.getClients())
  })

  // срабатывает при выходе
  socket.on('userLeft', async data => {
    // let user = await User.findOne({ where: { id: data.userId } }); 
    // user.online = "N";
    // await user.save();
  })

  // срабатывает при отключении
  socket.on('disconnect', () => {
    client.deleteClient(socket.id)
    // const user = users.remove(socket.id)
    // if (user) {
    //   io.to(user.room).emit('updateUsers', users.getByRoom(user.room))
    //   io.to(user.room).emit(
    //     'newMessage',
    //     m('admin', `Пользователь ${user.name} вышел.`)
    //   )
    // }
  })
})

export {
  io,
  app,
  server
}