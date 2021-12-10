const express = require('express')
const AdminController = require('../controllers/admin/admin.controller')
const AdminRouter = express.Router()

AdminRouter.get('/', AdminController.homePage)

module.exports = AdminRouter