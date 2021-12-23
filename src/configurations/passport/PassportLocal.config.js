const LocalStrategy = require('passport-local')
const UserService = require('../../services/user.service')

const PassportLocal = new LocalStrategy(
    async function(username, password, done) {
        const user = await UserService.findUser(username)

        console.log('local', username, password, user)
        done(null, user)
    }
)

module.exports = PassportLocal