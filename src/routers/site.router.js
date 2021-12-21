const express = require('express')
const HomeController = require('../controllers/site/home.controller')
const AuthController = require('../controllers/site/auth.controller')
const router = express.Router()
const path = ''
const passport = require('passport')

router.get('/', HomeController.homePage)
router.get('/login', AuthController.loginPage)
router.get('/register', AuthController.registerPage)
router.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
}))
router.get('/fail', HomeController.homePage)
router.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/fail'
}));

module.exports = {
    path,
    router
}