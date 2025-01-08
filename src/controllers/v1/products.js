const Products = require('../../models/products.model')

const getProducts = async () => {
  try {
    const user = await Products.findAll()
    if (user) return user
    else return {
      message: 'Products not found',
      code: 404
    }
  } catch(err) {
    return {
      message: err.message,
      code: 500
    }
  }
}

const funcGetProducts = async (req, res) => {
  const user = await getProducts()
  res.json({
    message: 'success',
    code: 200,
    data: user ? user : [],
    totalElements: user ? user.length : 0
  })
}

module.exports = {
  funcGetProducts
}