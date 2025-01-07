const express = require('express')
const router = express.Router()
const useLogin = require('../../../controllers/v1/login')

router.post('/login', useLogin.getLogin)

module.exports = router