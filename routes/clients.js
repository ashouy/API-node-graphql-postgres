const express = require('express')
const productRoute = express.Router()
const db = require('../db/db')


productRoute.get('/', async (req, res) => {
    res.send({message: "query to get all"})

})
productRoute.patch('/:id', async (req,res) =>{
    res.send({message: "query to get all"})

})

productRoute.get('/:id', async (req, res) => {
    res.send({message: "query to get all"})

})

productRoute.post('/', async (req, res) => {
    res.send({message: "query to get all"})

})

module.exports = productRoute