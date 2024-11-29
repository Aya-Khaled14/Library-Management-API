const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books')
const authntication = require('../middelware/auth')


//API GEt all books -> (login-ed user)
router.get('/api/books',authntication,booksController.getAllBooks)

// API Create one book -> admin
router.post('/api/books',authntication,booksController.createBook)

// API get one book -> (login-ed user)
router.post('/api/books/:id',authntication,booksController.getOneBook)

//API delete one book --> Admin
router.delete('/api/books/:id',authntication,booksController.deleteBook)

//API Update one book -> (login-ed user)
router.put('/api/books/:id',authntication,booksController.updateBook)


/*
router.post('/api/users/register',userController.register)
router.post('/api/users/login',userController.login)
*/

module.exports = router