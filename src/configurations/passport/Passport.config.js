const PassportGoogle = require('./PassportGoogle.config')
const passport = require('../../singleton/Passport').getInstance()

passport.serializeUser(function(user, cb) {
    // console.log( "seri", user, cb)
    cb(null, user);
});
  
passport.deserializeUser(function(obj, cb) {
    // console.log( "deseri", obj, cb)
    cb(null, obj);
});
  
passport.use(PassportGoogle)


module.exports = passport