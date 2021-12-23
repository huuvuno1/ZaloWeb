const User = require('../models/user.model')
const UserService = {}
const crypto = require("crypto");

UserService.getAllUsers = async () => {
    return await User.find()
}

UserService.findUser = async (param) => {
    const user = await User.findOne({
        $or: [
            {"email": param},
            {'username': param},
            {'phoneNumber': param}
        ]
    }).lean()
    return user
}

UserService.save = async (user) => {
    console.log('service', user)
    if (!user.username) {
        user.username = crypto.randomBytes(16).toString("hex");
    }
    return (await new User(user).save())._doc
}

module.exports = UserService