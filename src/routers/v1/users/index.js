const express = require('express')
const router = express.Router()
const useUsersController = require('../../../controllers/v1/users')

router.get('/users', useUsersController.funcUsers)
router.post('/users/create', useUsersController.funcCreateUser)
router.put('/users/:id', useUsersController.funcUpdateUser)
router.delete('/users/:id', useUsersController.funcDeleteUser)

module.exports = router