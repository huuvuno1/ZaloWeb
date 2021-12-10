const AuthApi = {}

AuthApi.login = (req, res) => {
    res.json({
        "status": 10000,
        "message": "login successful"
    })
}

module.exports = AuthApi