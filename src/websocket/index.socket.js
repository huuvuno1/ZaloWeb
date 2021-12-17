const SocketApp = require('../singleton/Socket')

SocketApp.getInstance().on('connection', socket => {
    console.log('connected')
})