const ExpressApp = require('../singleton/Express')
const SiteRouter = require('./site.router')
const AdminRouter = require('./admin.router')
const ApiRouter = require('./api.router')
const router = ExpressApp.getInstance()
const AuthMiddleware = require('../middleware/Auth.middleware')


router.use('/api/v1', ApiRouter)
router.use('/admin', AdminRouter)
router.use('/', AuthMiddleware, SiteRouter)
