const express = require('express')
const db = require('./db')
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middlewares/error.middleware');
const { app, server } = require('./socket')

app.use(express.json({ extended: true }))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // тут выставим домен с которым будет работать api
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(cookieParser());
const whitelist = [process.env.CLIENT_URL, process.env.ADMIN_URL]
const corsOptions = {
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  credentials: true,
  // origin: '*',
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback('Not allowed by CORS')
      
    }
  }
}
app.use(cors(corsOptions));
app.use('/api/menu', require('./router/menu.routes'));
app.use('/api/food', require('./router/food.routes'));
app.use('/api/user', require('./router/user.routes'));
app.use('/api/table', require('./router/table.routes'));
app.use('/api/refresh', require('./router/user.routes'));
app.use(errorMiddleware);


const PORT = process.env.PORT || '5000'
const HOST = process.env.HOST || 'localhost' //'0.0.0.0'

async function start() {
    try {

        await db.authenticate();
        server.listen(PORT, HOST, () => console.log(`App has been started on port ${PORT}...`))
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      
      }
}

start()