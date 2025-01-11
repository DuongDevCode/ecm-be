const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Products = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), // Giá với độ chính xác 2 chữ số sau dấu phẩy
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT, // Mô tả có thể dài
    allowNull: true,
  },
  image_data: {
    type: DataTypes.BLOB('long'), // Lưu ảnh dưới dạng nhị phân
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  rating: {
    type: DataTypes.DECIMAL(3, 2), // Đánh giá, ví dụ: 4.5
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Products;