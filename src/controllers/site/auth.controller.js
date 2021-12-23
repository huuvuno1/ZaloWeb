const AuthController = {}

AuthController.loginPage = (req, res) => {
    console.log('lksjf vao login')

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

AuthController.successAuth = (req, res) => {
    console.log('test', req.user)
    
    res
    .render('site/authProcess', {
        status: true
    })
}

AuthController.failAuth = (req, res) => {
    console.log('test', req.user)
    
    res
    .render('site/authProcess', {
        status: false
    })
}


module.exports = AuthController