//http
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const graphqlHttp = require('express-graphql')
const Schema = require('./graphql/Schema')
const Resolver = require('./graphql/Resolver')

//import routes
//const productRoute = require('./routes/product')
//const clientRoute = require('./routes/clients')



//middlewares
app.use(cors())
app.use(bodyParser.json())
app.use('/graphql', graphqlHttp({
    schema: Schema,
    rootValue: Resolver,
    graphiql: true  
})
)

//app.use('/product', productRoute)
//app.use('/client', clientRoute)

app.listen(3000)