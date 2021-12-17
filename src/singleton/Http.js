const http = require('http')
const Express = require('./Express')

const HttpApp = (function(){
    let instance;
    function createInstance() {
        let object = http.createServer(Express.getInstance())
        return object
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance()
            }
            return instance
        }
    }
})()

module.exports = HttpApp