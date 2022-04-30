import express from 'express'
import db from './db/index.js'
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import errorMiddleware from './middlewares/error.middleware.js'
import { app, server, } from './socket.js'

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
import menuRoute from './router/menu.routes.js'
import foodRoute from './router/food.routes.js'
import userRoute from './router/user.routes.js'
import tableRoute from './router/table.routes.js'
import botRoute from './router/bot.routes.js'

app.use(cors(corsOptions));
app.use('/api/menu',  menuRoute);
app.use('/api/food', foodRoute);
app.use('/api/user', userRoute);
app.use('/api/table', tableRoute);
app.use('/api/refresh', userRoute);
app.use('/api/bot', botRoute);
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