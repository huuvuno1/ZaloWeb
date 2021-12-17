const socketIo = require('socket.io')
const HttpApp = require('./Http')

const SocketApp = (function(){
    let instance;

    function createInstance() {
        let object = socketIo(HttpApp.getInstance())
        return object
    }

    return {
        getInstance: function() {
            if (!instance)
                instance = createInstance()
            return instance
        }
    }
})()

module.exports = SocketApp