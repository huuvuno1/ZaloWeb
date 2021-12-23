require('dotenv').config()
const ExpressApp = require('./src/singleton/Express')
const HttpApp = require('./src/singleton/Http')

const express = require('express')
const helmet = require('helmet')
const path = require('path')
const cookieParser = require('cookie-parser')
const connectDatabase = require('./src/configurations/db.config')
const app = ExpressApp.getInstance()
const routers = require('./src/routers/routers')
const PORT = process.env.SERVER_PORT || 3000
const session = require('express-session')
const passport = require('./src/configurations/passport/Passport.config')


connectDatabase()



app.use(express.static('public'))
app.use(helmet())
app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.set('views', path.join(__dirname, './src/views/'))
app.set('view engine', 'ejs')

// require('./src/configurations/passport/GooglePassport.config')

// test

app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');


 
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'");
    next();
});



// config router
for (const router of routers)
    app.use(router.path, router.router)



    
// config socket.io
require('./src/websocket/index.socket')

HttpApp.getInstance().listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})