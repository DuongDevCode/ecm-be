const { Sequelize } = require('sequelize');

module.exports = new Sequelize('postgres', 'postgres', '123abc@', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});