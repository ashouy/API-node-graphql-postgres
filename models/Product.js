const db = require('../db/db')

class Product {
    constructor(params) {
        this.id = params.id
        this.name = params.name
        this.price = params.price
        this.description = params.description
        this.addedDate = params.addeddate
    }

}

module.exports = Product