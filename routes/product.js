const express = require('express')
const productRoute = express.Router()
const db = require('../db/db')


productRoute.get('/', async (req, res) => {
    db.query('query to get all', params, callback)

})

productRoute.patch('/:id', async (req,res) =>{

})

productRoute.get('/:id', async (req, res) => {

})

productRoute.post('/', async (req, res) => {

})

module.exports = productRoute