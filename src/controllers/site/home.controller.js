const HomeController = {}
const redis = require('redis')
const client = redis.createClient()

HomeController.homePage = (req, res) => {
    
    res
    .render('site/homepage')
}

module.exports = HomeController