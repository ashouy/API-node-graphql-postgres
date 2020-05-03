const Client = require('../models/Client')
const Product = require('../models/Product')
const db = require('../db/db')

module.exports = {
    createClient: async ({ userInputc }, req) => {
        const queryText = 'INSERT INTO client (name, addeddate) VALUES ($1, $2) RETURNING *'
        try {
            const addedClient = new Client(
                (await db.query(
                    queryText, [
                    userInputc.name,
                    userInputc.addedDate
                ])).rows[0]
            )
            return addedClient
        } catch (err) {
            throw new Error("failed to insert Client ")
        }
    },

    createProduct: async ({ userInputp }, req) => {
        const queryText = 'INSERT INTO product (name, price, description, addeddate) VALUES ($1, $2, $3, $4) RETURNING *'
        try {
            const addedProduct = new Product(
                (await db.query(
                    queryText, [
                    userInputp.name,
                    userInputp.price,
                    userInputp.description,
                    userInputp.addedDate
                ])).rows[0]
            )
            return addedProduct
        } catch (err) {
            throw new Error("failed to insert Product")
        }
    },

    addProduct: async ({ userInputpc }, req) => {
        const queryText = 'INSERT INTO client_product (client_id, product_id) VALUES ($1, $2) RETURNING *'
        try {
            return (await db.query(
                queryText, [
                userInputpc.id_client,
                userInputpc.id_product
            ])).rows[0]
        } catch (err) {
            throw new Error("can't add product to client")
        }
    },
    Clients: async () => {
        const queryText = 'SELECT * FROM client'
        try {
            const clients = (
                await db.query(queryText, [])
            ).rows
            return clients
        } catch (err) {
            throw new Error("can't list clients")
        }
    },
    Products: async () => {
        const queryText = 'SELECT * FROM product'
        try {
            const products = (
                await db.query(queryText, [])
            ).rows
            return products
        } catch (err) {
            throw new Error("can't list products")
        }
    },

    getClient: async ({ client_id }) => {
        const queryText = 'SELECT * FROM client WHERE client.id = $1'
        try {
            const client = (
                await db.query(queryText, [client_id])
            ).rows[0]
            return client
        } catch (err) {
            throw new Error("can't find client")
        }
    },

    getProduct: async ({ product_id }) => {
        const queryText = 'SELECT * FROM product WHERE product.id = $1'
        try {
            const product = (
                await db.query(queryText, [product_id])
            ).rows[0]
            return product
        } catch (err) {
            throw new Error("can't find product")
        }
    },
    getProductsByClient: async ({ client_id }) => {
        queryText ="SELECT * FROM product WHERE product.id " +  
        "IN (SELECT pc.product_id FROM client_product pc " +  
        "WHERE pc.client_id = $1 )"
        try {
            const products =(
                await db.query(queryText,[client_id])
            ).rows
            return products

        } catch(err){
            throw new Error("can't list product for this client")
        }
    }
}