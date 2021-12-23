const User = require('../models/user.model')
const UserService = {}

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
    })
    return user
}

UserService.save = async (user) => {
    await new User(user).save()
}

module.exports = UserService