const User = require('../../models/usersModel')
exports.createUser = async (req, res) => {
  try {
    const {fullname, email, position, address, dob, pwd} = req.body
    const user = await User.create({fullname, email, position, address, dob, pwd})    
    console.log(user)
    res.status(200).json({
      message: 'create success'
    })
  } catch (error) {
    res.status(500).json({error: error.message}) 
  }
}

exports.getAllUsers = async (req, res) => {
  try {
      const users = await User.find();
      res.status(200).json(users);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};