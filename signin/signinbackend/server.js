const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect("mongodb+srv://nafade:nafade@cluster0.ipfho.mongodb.net/mytable?retryWrites=true&w=majority", () => console.log("Connection Successful"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("Server is Up"))