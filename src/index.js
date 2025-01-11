const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
const path = require('path');
require('dotenv').config(); // Đọc các biến môi trường từ .env
// const sequelize = require('./config/db.config')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const useLogin = require('./routers/v1/login/index')
const useUsersController = require('./routers/v1/users/index')
const useProductsConroller = require('./routers/v1/products/index')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public')));

app.use('/v1', useLogin)
app.use('/v1', useUsersController)
app.use('/v1', useProductsConroller)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})