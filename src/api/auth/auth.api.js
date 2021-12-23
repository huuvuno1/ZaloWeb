const BaseResponse = require('../../utils/BaseResponse')
const MailService = require('../../services/mail.service')
const { validateEmail } = require('../../utils/Validate') 
const { EMAIL_INVALIDATE } = require('../../constant/Error')
const AuthApi = {}

AuthApi.login = (req, res) => {
    console.log(req.body)

    BaseResponse.response(res, {
        "oke": 123
    }, 200)
}

AuthApi.getEmailVerificationCode = (req, res) => {
    const email = req.body.email
    if (validateEmail(email)) {
        MailService.sendCodeVerification(email, 123456)
        BaseResponse.response(res, {})
    } else {
        BaseResponse.response(res, EMAIL_INVALIDATE)
    }
} 

AuthApi.emailVerification = (req, res) => {
    console.log(req.body)

    BaseResponse.response(res, {
        "oke": 123
    }, 200)
}

AuthApi.register = (req, res) => {
    console.log(req.body)

    BaseResponse.response(res, {
        "oke": 123
    }, 200)
}

module.exports = AuthApi