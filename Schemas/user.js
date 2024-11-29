const  mongoose  = require("mongoose");
const bcrypt = require('bcryptjs');
// create my own module
const Schema = mongoose.Schema

const userSchema = new Schema({
    name : String,
    age : Number,
    phone : {type : String , unique : true},
    email : {type : String , unique : true},
    password : String, 
    role: String

})

 userSchema.methods.comparePasswords = async function(password){
    return await bcrypt.compare(password,this.password)
 }
module.exports = mongoose.model('User' , userSchema)  // to use module autside this file