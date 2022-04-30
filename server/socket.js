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
    client.addClient(socket.id)
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
  // срабатывает при входе
  socket.on('newClaimNotified', async data => {
    // console.log(data)
    // Notifycation.create({
    //   title: 'Поступила новая заявка!',
    //   text: '',
    //   date: new Date(),
    //   event: 'claim',
    //   recipients: data.departamentId,
    //   read: [data.userId],
    // }).then(notify => {
    //   console.log('notify', notify.dataValues)
    //   socket.broadcast
    //     .to(data.departamentId)
    //     .emit('notifications', `Данные с сервера ${data}`)
    // }).catch(err=>console.log(err))
    
    // const payload = JSON.stringify({ title: 'Поступила новая заявка!', body: 'testtesttets!' });
    // const user = await User.findOne({where: { id: data.userId }, raw: true})
    // webpush.sendNotification(user.subscription, payload).catch(error => {
    //   console.error(error.stack);
    // });
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