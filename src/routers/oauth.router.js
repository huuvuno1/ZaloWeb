const express = require('express')
const router = express.Router()
const path = '/auth'
const passport = require('../singleton/Passport').getInstance()
const AuthController = require('../controllers/site/auth.controller')



router.get('/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/google/callback',passport.authenticate('google', { failureRedirect: '/auth/error' }), AuthController.handleSuccessAuth);

router.get('/error', AuthController.failAuth)
router.get('/success', AuthController.successAuth)

module.exports = {
    path,
    router
}