const AuthController = {}

AuthController.loginPage = (req, res) => {
    res.render('site/authentication', {
        page: "login",
        title: "Đăng nhập vào zalo"
    })
}

AuthController.registerPage = (req, res) => {
    res.render('site/authentication', {
        page: "register",
        title: "Đăng ký tài khoản zalo"
    })
}

module.exports = AuthController