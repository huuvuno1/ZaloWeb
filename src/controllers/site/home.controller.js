const HomeController = {}

HomeController.homePage = (req, res) => {
    res.send("this is home page")
}

module.exports = HomeController