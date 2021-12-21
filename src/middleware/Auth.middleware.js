const { GlobalException } = require('./ErrorHandle.middleware')

const AuthMiddleware = async (req, res, next) => {
    const { token } = req.cookies
   
    if (token) {

    } else {
        next(GlobalException)
    }
}

module.exports = AuthMiddleware