const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
      type: String,
      required: true,
      // unique: true,
  },
  price: {
      type: String,
      required: true,
  },
  quantity: {
      type: Number,
      required: true,
  },
  image_url: {
      type: String,
      required: true,
  },
  status: {
      type: Boolean,
      required: true,
  },
  createdAt: {
      type: Date,
      default: Date.now,
  },
  updatedAt: {
      type: Date,
      default: Date.now,
  },
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product