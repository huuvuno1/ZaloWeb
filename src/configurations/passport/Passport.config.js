const GooglePassport = require('./GooglePassport.config')
const passport = require('../../singleton/Passport').getInstance()

passport.serializeUser(function(user, cb) {
    cb(null, user);
});
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});
  
passport.use(GooglePassport)


module.exports = passport