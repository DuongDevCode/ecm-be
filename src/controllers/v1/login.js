const User = require('../../models/user.model')
const {encrypt, decrypt} = require('../../../utils')

const getUser = async (req, res) => {
  try {
    console.log('REQ: ', req)
    console.log(await User.findAll())
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
  const req_body = JSON.parse(decrypt_body)
  const user = await getUser(req_body, res)
  if (user.code === 404) 
    res.json({
      message: user.message,
      code: user.code
    })
  else
    res.json({
      message: 'success',
      code: 200,
      data: encrypt(JSON.stringify(user))
    })
}

module.exports = {
  getLogin
}