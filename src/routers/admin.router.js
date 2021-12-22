const express = require('express')
const AdminController = require('../controllers/admin/admin.controller')
const router = express.Router()
const path = '/admin'
const passport = require('../singleton/Passport')

router.get('/',  AdminController.homePage)

module.exports = {
    path,
    router
}