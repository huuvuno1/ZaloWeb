const mongoose = require('mongoose')

module.exports = () => {
    const mongoDbUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_POST}/${process.env.MONGO_DB}`
    console.log('connecting ' + mongoDbUrl)
    mongoose.Promise = global.Promise
    mongoose
        .connect(mongoDbUrl, {
            useNewUrlParser: true
        })
        .then(() => {
            console.log(`Successfully connected to the database: ${process.env.MONGO_DB}`)
        })
        .catch(err => {
            console.log(`Could not connect to the database. Exiting now...\n${err}`)
            process.exit()
        })
}