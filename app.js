const express = require('express')
const cors = require('cors')
const app = express()
const transaction = require("./controllers/transactionController")

app.use(express.json())
app.use(cors())


app.use("/transaction", transaction)

module.exports = app