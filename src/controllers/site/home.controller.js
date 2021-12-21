const HomeController = {}
const redis = require('redis')
const client = redis.createClient()

HomeController.homePage = (req, res) => {
    
    res
    .set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
    .render('site/homepage')
}

module.exports = HomeController