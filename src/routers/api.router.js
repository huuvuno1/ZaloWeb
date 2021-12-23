const express = require('express')
const AuthApi = require('../api/auth/auth.api')
const router = express.Router()
const passport = require('../configurations/passport/Passport.config')
const path = '/api/v1'

router.post('/login',passport.authenticate('local'), AuthApi.login)
router.post('/getEmailVerificationCode', AuthApi.getEmailVerificationCode)

module.exports = {
    path,
    router
}