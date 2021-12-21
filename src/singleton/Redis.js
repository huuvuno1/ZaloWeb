

const RedisClient = (function(){
    let instance;

    return {
        getInstance: function() {
            if (!instance) {
                const redis = require('redis')
                const REDIS_PORT = process.env.REDIS_PORT || 6379
                instance = redis.createClient()
                console.log('sldkafjlkdsfj')
                instance.on('connect', () => {
                    console.log('Redis connected')
                })
                instance.on('error', (err) => {
                    console.log("loi roi roi r " )
                });
            }
            return instance
        }
    }
})()

module.exports = RedisClient