const SiteRouter = require('./site.router')
const AdminRouter = require('./admin.router')
const ApiRouter = require('./api.router')
const OAuthRouter = require('./oauth.router')

module.exports = [
    SiteRouter,
    AdminRouter,
    ApiRouter,
    OAuthRouter
]