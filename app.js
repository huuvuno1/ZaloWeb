const express = require('express')
const dotevn = require('dotenv')
const connectDatabase = require('./src/configurations/db.config')
const router = require('./src/routers/router')
const app = express()

dotevn.config()
connectDatabase()

app.use(express.static('public'))
// app.use(cors())
app.use(express.json())
app.use("/", router)

const PORT = process.env.SERVER_PORT || 3000

app.listen(PORT, () => {
    console.log(`The application started on port ${PORT}`)
})