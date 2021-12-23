const UserService = require("../../services/user.service")
const JwtHelper = require('../../utils/JwtHelper')
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

AuthController.handleSuccessAuth = async (req, res) => {
    // Successful authentication, redirect success.
    const userAuth = req.user
    let user = await UserService.findUser(userAuth.emails[0].value)
    if (!user) {
        user = await UserService.save({
            fullname: userAuth.displayName,
            email: userAuth.emails[0].value,
            active: true
        })
    }

    const secret = process.env.JWT_SECRET || 'secret_key'
    const token = await JwtHelper.generateToken(user.username, secret, '7d')
    res.cookie('token',token, { maxAge: 900000, httpOnly: true });
    res.redirect('/auth/success');
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