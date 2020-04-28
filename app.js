const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const bodyParser = require('body-parser')
//const MongoClient = require('mongodb').MongoClient

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true})

//import routes
const productRoute = require('./routes/product')


//middlewares
app.use(bodyParser.json())
app.use('/product', productRoute)

app.listen(3000)