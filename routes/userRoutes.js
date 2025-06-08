const express = require('express')
const { createUser, getUser } = require('../controllers/userController')


const router = express.Router()

router
    .get('/login', getUser)
    .post('/signup', createUser)


module.exports = router