const ExpressApp = require('./src/singleton/Express')
const HttpApp = require('./src/singleton/Http')
const dotevn = require('dotenv')
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

dotevn.config()
connectDatabase()



app.use(express.static('public'))
app.use(helmet())
app.use(express.json())
app.use(cookieParser())
app.use(session({ secret: 'SECRET' }))

app.set('views', path.join(__dirname, './src/views/'))
app.set('view engine', 'ejs')

// require('./src/configurations/passport/GooglePassport.config')

// test
var userProfile;

app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');


 
app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });
// 



// config router
for (const router of routers)
    app.use(router.path, router.router)



    
// config socket.io
require('./src/websocket/index.socket')

HttpApp.getInstance().listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})