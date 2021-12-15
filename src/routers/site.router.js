const express = require('express')
const HomeController = require('../controllers/site/home.controller')
const AuthController = require('../controllers/site/auth.controller')
const SiteRouter = express.Router()

SiteRouter.get('/', HomeController.homePage)
SiteRouter.get('/login', AuthController.loginPage)
SiteRouter.get('/register', AuthController.registerPage)

module.exports = SiteRouter