const express = require('express')
const { createUser, getUser } = require('../controllers/userController')
const { authenticateToken, getUserProfile } = require('../middlewares/userAuth')

const router = express.Router()

router.post('/signup', createUser)
router.post('/login', getUser)
router.get('/profile', authenticateToken, getUserProfile)

module.exports = router