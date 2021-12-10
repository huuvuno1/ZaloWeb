const AuthController = {}

AuthController.loginPage = (req, res) => {
    res.render('auth/login')
}

module.exports = AuthController