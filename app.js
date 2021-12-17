const ExpressApp = require('./src/singleton/Express')
const HttpApp = require('./src/singleton/Http')
const dotevn = require('dotenv')
const express = require('express')
const helmet = require('helmet')
const path = require('path')
const connectDatabase = require('./src/configurations/db.config')
const app = ExpressApp.getInstance()
const PORT = process.env.SERVER_PORT || 3000

// config router
require('./src/routers/router')

// config socket.io
require('./src/websocket/index.socket')


dotevn.config()
connectDatabase()

app.use(express.static('public'))
app.use(helmet())
app.use(express.json())

app.set('views', path.join(__dirname, './src/views/'))
app.set('view engine', 'ejs')

HttpApp.getInstance().listen(PORT, () => {
    console.log(`The application started on port ${PORT}`)
})