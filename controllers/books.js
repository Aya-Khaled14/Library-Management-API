const bookSchema = require('../Schemas/book');
exports.getAllBooks= async function (req,res) {
    try {
        const books = await bookSchema.find() //[] No books
        res.json({message: "All books Retrived", data:books})
    } catch (err) {
        res.status(400).json({message: "Something wrong when All books Retrived", error:err })
    }
}

exports.getOneBook= async function (req,res) {
    try {
        const onebook = await  bookSchema.findById({_id: req.params.id})
        res.json({message: "one book Retrived", data:onebook})

    } catch (err) {
        res.status(400).json({message: "Something wrong when One book Retrive", error:err})
    }
}

exports.deleteBook= async function (req,res) {
    try {
        await  bookSchema.findByIdAndDelete({_id: req.params.id})
        res.json({message: "one book deleted", data:[]})
    } catch (err) {
        res.status(400).json({message: "Something wrong when Delete one book", error:err})

    }
}

exports.updateBook= async function (req,res) {
    try {
        await  bookSchema.findByIdAndUpdate(req.params.id,req.body)
        res.json({message: "one book updated", data:[]})

    } catch (err) {
        console.log(err)
        res.status(400).json({message: "Something wrong when update book", error:err})

    }
}


//for only admin
exports.createBook= async function (req,res) {
    try {
        if(req.user.role === 'admin'){
             //anther way to create the fisrt in user by new keyword as you do operations of it 
        const createdbook = await bookSchema.create(req.body)
        res.json({message:"Book created successfully", data:createdbook})
        }
        else{
            res.status(403).json({message: "you dont have Permission to Create book"})
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({message: "Something wrong when Create of book", error:err })
    }
}

