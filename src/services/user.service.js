const User = require('../models/user.model')
const UserService = {}

UserService.getAllUsers = async () => {
    return await User.find()
}

module.exports = UserService