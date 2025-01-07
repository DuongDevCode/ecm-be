const User = require('../../models/user.model')

const getUser = async (req, res) => {
  const body = {
    email: req.body.email,
    pwd: btoa(req.body.password)
  }
  console.log('BODY: ', body)
  try {
    const user = await User.findOne({
      where: body
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
  const user = await getUser(req, res)
  res.json({
    message: 'success',
    code: 200,
    data: user ? user : null
  })
}

module.exports = {
  getLogin
}