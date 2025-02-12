const express = require('express');
const userController = require('../../../controllers/v1/usersController');

const router = express.Router();

console.log('test')

// Định nghĩa các route
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);

module.exports = router;