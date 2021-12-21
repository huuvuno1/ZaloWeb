const GoogleStrategy = require('passport-google-oidc')

const GooglePassport = new GoogleStrategy({
            clientID: '967128367322-jmtpha6g5go0hk10ecpb8g2c8u7br5p6.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: '/auth/google/callback'
        }, function(orign, profile, obj, done) {
        console.log('oke', orign)
        console.log('oke1', obj)
        console.log('oke2', profile)
        console.log('oke3', done)
        return done(null, profile);
    })

module.exports = GooglePassport