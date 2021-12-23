const ExpressApp = require('./src/singleton/Express')
const HttpApp = require('./src/singleton/Http')
const dotevn = require('dotenv')
const express = require('express')
const helmet = require('helmet')
const path = require('path')
const cookieParser = require('cookie-parser')
const connectDatabase = require('./src/configurations/db.config')
const app = ExpressApp.getInstance()
const PORT = process.env.PORT || 3000

console.log('nguyen klsdjflsdkf vu')

dotevn.config()
connectDatabase()

app.use(express.static('public'))
app.use(helmet())
app.use(express.json())
app.use(cookieParser())

app.set('views', path.join(__dirname, './src/views/'))
app.set('view engine', 'ejs')

// config router
require('./src/routers/router')

// config socket.io
require('./src/websocket/index.socket')

HttpApp.getInstance().listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port: ${PORT}`)
})