const {buildSchema} = require('graphql')

module.exports  = buildSchema(`
    
    type Product{
        id: Int!
        name: String!
        price: String!
        description: String!
        addedDate: String!
    }

    type Client{
        id: Int!
        name: String!
        addedDate: String!
    }

    type ClientProduct{
        client_id: Int!
        product_id: Int!
    }

    input UserInputDataP{
        name: String!
        price: Int!
        description: String!
        addedDate: String!
    }

    input UserInputDataC{
        name: String!
        addedDate: String!
    }

    input UserInputPC{
        id_client: Int!
        id_product: Int!
    }

    type RootMutation{
        createProduct(userInputp: UserInputDataP): Product!
        createClient(userInputc: UserInputDataC): Client!
        addProduct(userInputpc: UserInputPC):ClientProduct!
    }

    type RootQuery{
        Products:[Product]
        Clients:[Client]
        getClient(client_id: Int): Client!
        getProduct(product_id: Int): Product! 
        getProductsByClient(client_id: Int):[Product]    
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }

`)