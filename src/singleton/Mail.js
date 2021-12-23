const nodemailer = require('nodemailer');


const MailApp = (function() {
    let instance;
    const email = process.env.MAIL_NAME
    const password = process.env.MAIL_PASSWORD

    function createInstance() {
        console.log(email, password)
        if (!email || !password)
            throw new Error("Mail service configuration failed!")
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: email,
              pass: password
            }
        });
    }

    return {
        getInstance: function(){
            if (!instance)
                instance = createInstance()
            return instance
        }
    }
})()

module.exports = MailApp