const mongoose = require('mongoose')
const colors = require('colors')
const url = "mongodb://localhost:27017"

// const database_name = 'linkzifyv2'

mongoose.set('strictQuery', false);
//via mongoose package
const __db_connect = async () => {
    let connectionString = url+ "/" + `${process.env.DB_NAME}`
    let altlas_url = "";

    if(altlas_url){
        connectionString = altlas_url
    }
    await mongoose.connect(connectionString)
    .then(() => console.log('============ Connected! MongoDB with Mongoose ============'.magenta ,));

}
// __db_connect()
module.exports = __db_connect