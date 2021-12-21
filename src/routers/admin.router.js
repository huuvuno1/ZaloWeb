const express = require('express')
const AdminController = require('../controllers/admin/admin.controller')
const router = express.Router()
const path = '/admin'

router.get('/', AdminController.homePage)

module.exports = {
    path,
    router
}