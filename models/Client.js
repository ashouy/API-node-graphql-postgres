const db = require('../db/db')

class Client {
    constructor(params){
        this.id = params.id
        this.name = params.name
        this.addedDate = params.addeddate
    }

}
module.exports = Client