const AuthMiddleware = async (req, res, next) => {
    const { token } = req.cookies
    if (token) {

    } else {
        next()
    }
    
}

module.exports = AuthMiddleware