import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import store from '../store'
export default {
  install: (app) => {
    const socket = new VueSocketIO({
      debug: false,
      connection: SocketIO('http://localhost:5000'),
      vuex: {
          store,
          actionPrefix: 'SOCKET_',
          mutationPrefix: 'SOCKET_'
      }
    })

    app.config.globalProperties.$socket = socket.io
    app.provide('socket', socket)
  }
}
