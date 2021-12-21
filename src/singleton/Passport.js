
const PassportApp = (function(){
    let instance;

    function createInstance() {
        let object = require('passport')
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

module.exports = PassportApp