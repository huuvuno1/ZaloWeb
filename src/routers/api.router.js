const express = require('express')
const AuthApi = require('../api/auth/auth.api')
const ApiRouter = express.Router()

ApiRouter.post('/login', AuthApi.login)

module.exports = ApiRouter