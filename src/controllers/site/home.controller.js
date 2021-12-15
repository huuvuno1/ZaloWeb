const HomeController = {}

HomeController.homePage = (req, res) => {
    res.render('site/homepage')
}

module.exports = HomeController