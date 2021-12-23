const GoogleStrategy = require('passport-google-oidc')
const UserService = require('../../services/user.service')

const PassportGoogle = new GoogleStrategy({
            clientID: '967128367322-jmtpha6g5go0hk10ecpb8g2c8u7br5p6.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: '/auth/google/callback'
        }, async function(origin, profile, done) {
        return done(null, profile);
    })

module.exports = PassportGoogle