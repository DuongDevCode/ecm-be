const User = require('../../models/user.model')
const {encrypt, decrypt} = require('../../../utils')

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: req
    })
    if (user) return user
    else return {
      message: 'User not found',
      code: 404
    }
  } catch(err) {
    return {
      message: err.message,
      code: 500
    }
  }
}

const getLogin = async (req, res) => {
  const decrypt_body = decrypt(JSON.stringify(req.body.data))
  // const decrypt_pwd = decrypt(JSON.parse(decrypt_body).pwd)
  const req_body = JSON.parse(decrypt_body)
  const user = await getUser(req_body, res)
  res.json({
    message: 'success',
    code: 200,
    data: user ? encrypt(JSON.stringify(user)) : null
  })
}

module.exports = {
  getLogin
}