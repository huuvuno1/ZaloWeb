const express = require('express')

const ExpressApp = (function(){
    let instance;
    function createInstance() {
        let object = express()
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

module.exports = ExpressApp