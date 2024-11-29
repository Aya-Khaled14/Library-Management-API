const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const userRouter = require("./Routes/users")
const bookRouter = require("./Routes/books")
const userController = require("./controllers/users") 

 
const app = express()
app.use(bodyParser.json())


const url = "mongodb+srv://ECOMMERCE:ECOMMERCE123@mag-clustr0.vbgqe.mongodb.net/"

//DB connection
const connectToDatabase = async() => {
    try{
        mongoose.set('strictQuery' , false)
        mongoose.connect(url)
        console.log("connected to database")

    }catch(error){
        console.log("NOT connected to DB",error)
        process.exit()
    }
    
}
connectToDatabase ()

app.use('/' , userRouter)
app.use('/' , bookRouter)

app.listen(9093)