const MailApp = require('../singleton/Mail').getInstance();

const MailService = {}

MailService.sendCodeVerification = (sendTo, code) => {

  MailApp.sendMail({
    from: process.env.MAIL_NAME,
    to: sendTo,
    subject: 'Verify your account',
    text: `
      Welcome!\n
      Your account verification code is: ${code}
    `
  }, (err, info) => {
    if (err)
      console.log(`Send mail to ${sendTo} fail`)
    console.log(`send mail success to ${sendTo}`, info.response)
  })
}

module.exports = MailService