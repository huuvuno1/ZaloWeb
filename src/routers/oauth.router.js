const express = require('express')
const router = express.Router()
const path = '/auth'
const passport = require('../singleton/Passport').getInstance()
const AuthController = require('../controllers/site/auth.controller')

router.get('/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/google/callback',passport.authenticate('google', { failureRedirect: '/auth/error' }),
  (req, res) => {
      // Successful authentication, redirect success.
      res.cookie('cookiedssdfsdfName',"dsaklfjlkasdjfklsdajf", { maxAge: 900000, httpOnly: true });
      res.redirect('/auth/success');
  });

router.get('/error', AuthController.failAuth)
router.get('/success', AuthController.successAuth)

module.exports = {
    path,
    router
}