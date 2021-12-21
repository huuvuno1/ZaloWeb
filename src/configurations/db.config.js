const mongoose = require('mongoose')

module.exports = () => {
    const MONGO_HOST = process.env.MONGO_HOST || 'localhost'
    const MONGO_PORT = process.env.MONGO_PORT || 27017
    const MONGO_DB = process.env.MONGO_DB || "zaloweb"

    // const mongoDbUrl = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`
    const mongoDbUrl = `mongodb://mongo:n5vEgvQO0MPPWzCcPHLq@containers-us-west-2.railway.app:5455`
    console.log(mongoDbUrl);
    console.log('connecting ' + mongoDbUrl)
    mongoose.Promise = global.Promise
    mongoose
        .connect(mongoDbUrl, {
            useNewUrlParser: true
        })
        .then(() => {
            console.log(`Successfully connected to the database: ${MONGO_DB}`)
        })
        .catch(err => {
            console.log(`Could not connect to the database. Exiting now...\n${err}`)
            //process.exit()
        })
}