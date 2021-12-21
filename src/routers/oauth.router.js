const express = require('express')
const router = express.Router()
const path = '/auth'
const passport = require('../singleton/Passport').getInstance()

router.get('/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/auth/callback', 
passport.authenticate('google', { failureRedirect: '/error' }),
function(req, res) {
// Successful authentication, redirect success.
res.redirect('/success');
});
// 

module.exports = {
    path,
    router
}