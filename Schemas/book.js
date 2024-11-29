const  mongoose  = require("mongoose");
// create my own module
const Schema = mongoose.Schema

const bookSchema = new Schema({
    name : String,
    auther: String,
    description: String, 
    price: Number

})
 
//module
module.exports = mongoose.model('Books' , bookSchema)  // to use module autside this file