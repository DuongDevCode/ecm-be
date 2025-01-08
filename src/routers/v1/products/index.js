const express = require('express')
const router = express.Router()
const useProductsController = require('../../../controllers/v1/products')

router.get('/products', useProductsController.funcGetProducts)
// router.post('/users/create', useUsersController.funcCreateUser)
// router.put('/users/:id', useUsersController.funcUpdateUser)
// router.delete('/users/:id', useUsersController.funcDeleteUser)

module.exports = router