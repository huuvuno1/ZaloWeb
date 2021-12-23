const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = Schema({
    username: String,
    fullname: String,
    email: String,
    phoneNumber: String,
    password: String,
    avatar: String,
    active: Boolean,
    verify: {
        code: String,
        used: Boolean,
        timeExpired: Date
    }
})

module.exports = mongoose.model('user', User)