// const { Sequelize } = require('sequelize');
// const dbConfig = require('./db.config');

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,
//   port: dbConfig.PORT
//   // pool: {
//   //   max: dbConfig.pool.max,
//   //   min: dbConfig.pool.min,
//   //   acquire: dbConfig.pool.acquire,
//   //   idle: dbConfig.pool.idle
//   // }
// });

// module.exports = sequelize;
const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () =>{
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connected successfully');
  } catch(error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Thoát ứng dụng nếu kết nối thất bại
  }
}
module.exports = connectDB;