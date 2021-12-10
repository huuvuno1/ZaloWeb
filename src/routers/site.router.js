const express = require('express')
const HomeController = require('../controllers/site/home.controller')
const SiteRouter = express.Router()

SiteRouter.get('/', HomeController.homePage)

module.exports = SiteRouter