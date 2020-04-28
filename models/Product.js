var mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    amount:{
        type: Number,
        require: true
    },
    addDate:{
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('Product',productSchema)