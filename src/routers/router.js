const express = require('express')
const path = require('path')
const SiteRouter = require('./site.router')
const AuthRouter = require('./auth.router')
const AdminRouter = require('./admin.router')
const ApiRouter = require('./api.router')
const cors = require('cors')
const router = express()

router.set('views', path.join(__dirname, '../views/'))
router.set('view engine', 'ejs')

router.use('/api/v1', ApiRouter)
router.use('/admin', AdminRouter)
router.use('/', SiteRouter, AuthRouter)

module.exports = router 