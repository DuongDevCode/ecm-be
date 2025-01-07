const User = require('../../models/user.model')

const getUsers = async () => {
  try {
    const user = await User.findAll()
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

const funcUsers = async (req, res) => {
  const user = await getUsers()
  res.json({
    message: 'success',
    code: 200,
    data: user ? user : [],
    totalElements: user ? user.length : 0
  })
}

// CREATE
const funcCreateUser = async (req, res) => {
  const user = await User.create(req.body)
  res.json({
    message: 'success',
    code: 200,
    data: user
  })
}

// UPDATE
const funcUpdateUser = async (req, res) => {
  const user = await User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.json({
    message: 'success',
    code: 200,
    data: user
  })
}

// DELETE
const funcDeleteUser = async (req, res) => {
  const user = await User.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json({
    message: 'success',
    code: 200,
    data: user
  })
}

module.exports = {
  funcUsers,
  funcCreateUser,
  funcUpdateUser,
  funcDeleteUser
}