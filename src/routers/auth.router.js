const express = require('express')
const AuthController = require('../controllers/auth/auth.controller')
const AuthRouter = express.Router()

AuthRouter.get('/login', AuthController.loginPage)

module.exports = AuthRouter