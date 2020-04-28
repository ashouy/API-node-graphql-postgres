const express = require('express')
const productRoute = express.Router()
const Product = require('../models/Product')

productRoute.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.json({ message: err })
    }

})

productRoute.patch('/:id', async (req,res) =>{
    try{
        const updatedProduct = await Product.update(
            {_id: req.params.id}, //id of object that we want to change
            {$set: {amount : req.body.amount}} // changing the object's properties
        )
        res.json(updatedProduct)
    }catch(err){
        res.send({message: err})
    }
})

productRoute.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (err) {
        res.json({ message: err })
    }
})

productRoute.post('/', async (req, res) => {

    console.log(req.body)

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        amount: req.body.amount
    })
    try {
        const savedProduct = await product.save()
        res.json(savedProduct)
    }
    catch (err) {
        res.json({ meesage: err })
    }
})

module.exports = productRoute