const express = require('express')
require('dotenv').config()
const connectDB = require('./src/config/db')
// const {DB_STORE} = require('./src/config/database') // import variable connect sequelize
// const Product = require('./src/models/users') // import model
// const App = require('./src/routers/v1/users/index')
const userRoutes = require('./src/routers/userRoutes')
const cors = require('cors')

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
connectDB()
app.use('/api', cors(), userRoutes)


// DB_STORE.sync().then(() => {
//   console.log('Database synced')
// }).catch((err) => {
//   console.error('Unable to sync database:', err)
// })

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT)
})