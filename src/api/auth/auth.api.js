const BaseResponse = require('../../utils/BaseResponse')
const AuthApi = {}

AuthApi.login = (req, res) => {
    console.log(req.body)

    BaseResponse.response(res, {
        "oke": 123
    }, 200)
}

module.exports = AuthApi