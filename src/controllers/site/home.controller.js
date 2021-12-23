const HomeController = {}
const redis = require('redis')
const client = redis.createClient()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

HomeController.homePage = async (req, res) => {
    await sleep(10000)
    res
    .render('site/homepage')
}

module.exports = HomeController