const express = require('express')
const dotevn = require('dotenv')
const connectDatabase = require('./src/configurations/db.config')
const cors = require("cors")
const router = require('./src/routers/router')
const app = express()

dotevn.config()
connectDatabase()

// app.use(cors())
app.use(express.json())
app.use("/", router)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`The application started on port ${process.env.SERVER_PORT}`)
})