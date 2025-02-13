const Product = require('../../models/productsModel')
exports.createProduct = async (req, res) => {
  try {
    const {name, description, price, quantity, image_url, status} = req.body
    const user = await Product.create({name, description, price, quantity, image_url, status})    
    res.status(200).json({
      message: 'create success'
    })
  } catch (error) {
    res.status(500).json({error: error.message}) 
  }
}

exports.getAllProducts = async (req, res) => {
  try {
      const products = await Product.find();
      res.status(200).json(products.map((item) => {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          image_url: item.image_url
        }
      }));
  } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

exports.getDetail = async (req, res) => {
  try {
      const products = await Product.findOne({_id: req.params.id});
      res.status(200).json(products);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};