const express = require('express')
const AuthApi = require('../api/auth/auth.api')
const router = express.Router()
const path = '/api/v1'

router.post('/login', AuthApi.login)

module.exports = {
    path,
    router
}